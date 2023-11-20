"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AssigneeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full md:w-[200px]">
        <SelectValue placeholder="Assign..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="1">Piyush Yadav</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
