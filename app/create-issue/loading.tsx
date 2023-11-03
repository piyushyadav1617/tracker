import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingNewIssuePage = () => {
  return (
    <div className="space-y-6 w-[90vw] sm:w-[450px] mx-auto mt-10 sm:m-10">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="h-10" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="h-10" />
      </div>
      <Skeleton className="w-40" />
    </div>
  );
};

export default LoadingNewIssuePage;
