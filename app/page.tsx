import LatestIssues from "./_components/latestIssues";
import prisma from "@/prisma/client";
import IssueSummary from "./_components/issueSummary";
import IssueChart from "./_components/issueChart";
import { Metadata } from "next";
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
        <div className="border border-border rounded-lg p-2 sm:p-5">
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
        </div>
      </div>
      <LatestIssues />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View a summary of project issues'
};
