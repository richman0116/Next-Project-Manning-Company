import jwt from "jsonwebtoken";
import User from "@/app/modols/usermodule";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/helpers/mailer";
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    const token = await jwt.sign(
      { userId: user._id },
      process.env.TOKEN_SECRET!,
      { expiresIn: "1d" }
    );
    const templateName = "password_reset_email_template.html";
    const subject = "Password Reset";
    await sendEmail(
      email,
      subject,
      { domsn: process.env.DOMAIN, token },
      templateName
    );
    return NextResponse.json({
      message: "Password reset email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
