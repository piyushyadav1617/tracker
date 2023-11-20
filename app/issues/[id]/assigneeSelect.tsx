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
import { User } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
export function AssigneeSelect() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const { data } = await axios.get<User[]>("/api/users");
    setUsers(data);
  };
  return (
    <Select>
      <SelectTrigger className="w-full md:w-[200px]">
        <SelectValue placeholder="Assign..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {users.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
