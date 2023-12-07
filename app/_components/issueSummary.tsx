import * as React from "react";
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
      label: "In progress",
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
            className="flex flex-col border border-border justify-between  rounded-md p-4 h-24 w-28 md:w-36"
          >
            <Link href={"#"} className="text-sm sm:text-md">
              {container.label}
            </Link>

            <h2 className="font-semibold">{container.value}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default IssueSummary;
