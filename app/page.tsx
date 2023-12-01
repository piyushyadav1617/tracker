import LatestIssues from "./_components/latestIssues";
import prisma from "@/prisma/client";
import IssueSummary from "./_components/issueSummary";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex-1 flex flex-col  gap-4 ">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <div className="border p-10"></div>
      </div>
      <LatestIssues />
    </div>
  );
}
