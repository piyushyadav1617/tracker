import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <div className="space-y-6 w-[90vw] sm:w-[450px]">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="h-10" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="h-20" />
      </div>
      <Skeleton className="w-40 h-10" />
    </div>
  );
};

export default IssueFormSkeleton;
