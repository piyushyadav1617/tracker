import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/prisma/client";
import { userCredentialsSchema } from "@/zod/validationSchema";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'username',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "*******" }
      },
      async authorize(credentials) {
  
        const validation = userCredentialsSchema.safeParse(credentials);
        if (!validation.success)
        return null
      try {
        const user = await prisma.user.findUnique({ 
          where:{
            username:credentials?.username,
            password:credentials?.password
          }
        })
        if(user){
          return user
        }else{
          return null
        }
      } catch (error) {
          return null
      }     
      }
    })
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    //error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};
export default authOptions;
