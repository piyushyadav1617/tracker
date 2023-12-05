import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server"
import { userCredentialsSchema } from "@/zod/validationSchema";

export async function POST(request:NextRequest) {
  const body = await request.json();
  const validation = userCredentialsSchema.safeParse(body);
  if (!validation.success)
  return NextResponse.json(validation.error.errors, { status: 400 });
try {
  const username = await prisma.user.findUnique({ 
    where:{
      username:body.username
    }
  })
  if(username){
    const user = await prisma.user.findUnique({ 
      where:{
        username:body.username,
        password:body.password
      }
    })
    if(user){
      return NextResponse.json(user, {status:200});

    }else{
      return NextResponse.json({error:"Invalid credentials"}, {status:403})
    }
  }else{
    const user = await prisma.user.create({ 
      data:{
        username:body.username,
        password:body.password
      }
    })
    if(user){
      return NextResponse.json(user, {status:200});

    }else{
      return NextResponse.json({error:"could not create"}, {status:403})
    }

  }
} catch (error:any) {
  NextResponse.json({ error: error.message}, {status:500});
}
 

}
