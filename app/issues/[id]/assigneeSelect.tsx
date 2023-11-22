"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Issue } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from "@/components/ui/skeleton";
export function AssigneeSelect({issue}:{issue:Issue}) {


  const { data: users, isError,error, isPending, isSuccess} = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res=>res.data),
    staleTime: 60 * 1000, //60s
    retry: 3
  });

  if (isPending) return <Skeleton className="w-full h-10 md:w-[200px]"/>;

  if (isError){
    console.log(error) 
    return null
  };
  const assignUser = (userId:string) =>{
    axios.patch("/api/issues/" + issue.id, {
      assignedToUserId: userId || null,
    });
  }

  if(isSuccess) return (
    <Select defaultValue={issue.assignedToUserId || undefined} onValueChange={(userId)=>assignUser(userId)}>
      <SelectTrigger className="w-full md:w-[200px]">
        <SelectValue placeholder="Assign..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
