
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const gmailUser = process.env.GMAIL_USER as string;
const gmailPassword = process.env.GMAIL_PASSWORD as string;

if (!gmailUser || !gmailPassword) {
  throw new Error(
    "Required environment variables GMAIL_USER or GMAIL_PASSWORD are not set."
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPassword,
  },
});


function loadTemplate(templateName: string, data: any): string {
  const templatePath = path.join(
    process.cwd(),
    "public/email-templates",
    `${templateName}`
  );
  let templateContent = fs.readFileSync(templatePath, "utf8");

  Object.keys(data).forEach((key) => {
    templateContent = templateContent.replace(
      new RegExp(`{${key}}`, "g"),
      data[key]
    );
  });

  return templateContent;
}

export async function sendEmail(
  recipientEmail: string,
  subject: string,
  data: any,
  templateName: string
) {
  const htmlContent = loadTemplate(templateName, data);

  if (!transporter) {
    throw new Error("Transporter is not defined.");
  }

  try {
    const info = await transporter.sendMail({
      from: `"manningcompany" <${gmailUser}>`,
      to: recipientEmail,
      subject: subject,
      html: htmlContent,
    });

    console.log(`Email sent to ${recipientEmail}: ${info.messageId}`);
  } catch (error) {
    console.error("Error sending email", error);
    throw error; 
  }
}
