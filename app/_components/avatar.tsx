'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarUser({url}:{url:string}) {
    return (
      <Avatar className="h-8 w-8">
        <AvatarImage  src={url} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  