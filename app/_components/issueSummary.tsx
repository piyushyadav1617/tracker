import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    {
      label: "In-progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
    },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <div className="flex gap-2  sm:gap-4">
      {containers.map((container) => {
        return (
          <div
            key={container.label}
            className="flex flex-col border justify-between rounded-md p-4 w-28 md:w-36"
          >
            <Link href={"#"}>{container.label}</Link>

            <h2 className="font-semibold">{container.value}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default IssueSummary;
