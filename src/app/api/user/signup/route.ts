import User from "@/app/modols/usermodule";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/app/dbcomfig/dbconfige";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const verificationToken = await bcryptjs.hash(savedUser._id.toString(), 10);
        const templateName = "verification_template.html";
        const subject = "Email Verification";
        await sendEmail(email, subject, { verificationLink: `${process.env.DOMAIN}/verifyemail?token=${verificationToken}` }, templateName);

        return NextResponse.json({
            message: "User created successfully. Verification email sent.",
            success: true,
            savedUser
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
