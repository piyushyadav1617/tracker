import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server"
import { userSignupSchema} from "@/zod/validationSchema";

export async function POST(request:NextRequest) {
  const body = await request.json();
  const validation = userSignupSchema.safeParse(body);
  if (!validation.success)
  return NextResponse.json(validation.error.errors, { status: 400 });
try {
  const username = await prisma.user.findUnique({ 
    where:{
      username:body.username
    }
  })
  if(username){
      return NextResponse.json({error:"username already exists"}, {status:409})
  }else{
    const user = await prisma.user.create({ 
      data:{
        username:body.username,
        password:body.password
      }
    })
   
    return NextResponse.json(user, {status:200});
  }
} catch (error:any) {
  NextResponse.json({ error: error.message}, {status:500});
}
 
}
