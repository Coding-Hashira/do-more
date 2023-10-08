import user from "@/database/users";
import connectToMongo from '@/database/connection'
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request, res: NextApiResponse) {
    await connectToMongo();

    const token = await getToken({
        req: req as unknown as NextApiRequest,
        secret: process.env.NEXTAUTH_SECRET
    });

    if (!token) {
        return NextResponse.redirect(`http://localhost:3000/signin`)
    }

    const name = token?.name
    const email = token?.email
    const profileImage = token?.picture

    console.log(name)
    console.log(email)
    console.log(profileImage)

    const registeredUser = await user.findOne({ email: email })
    console.log(registeredUser)
    if (registeredUser) {
        console.log('user exists already')
        return NextResponse.redirect(`http://localhost:3000/`)
    } else {
        await user.create({ name, email, profileImage }) // Use await here
        return NextResponse.redirect(`http://localhost:3000/`)
    }
}