import { Skeleton } from "@/components/ui/skeleton";

const LoadingIssueDetailPage = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 mx-5 sm:mx-10 lg:mx-60">
      <Skeleton className="h-10 w-40" />
      <div className="flex flex-row gap-4 ">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-40" />
      </div>
      <Skeleton className="h-40" />
    </div>
  );
};

export default LoadingIssueDetailPage;
