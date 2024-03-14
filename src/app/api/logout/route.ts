import { NextRequest ,NextResponse} from "next/server";

export async function GET(){
    try {
        const reqest= await NextResponse.json({
            massage:'lagout succsefully',
            sucsee:true
        })

        
        reqest.cookies.set("token", '' ,{ httpOnly: true , expires: new Date(0)});

    return reqest

    } catch (error) {
        return NextResponse.json({massage:'your requast is not complete'})
    }
}