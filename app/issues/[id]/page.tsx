import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 mt-10 mx-5 sm:mx-10 lg:mx-60">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        {issue.title}
      </h2>
      <div className="flex flex-row gap-4 ">
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Textarea readOnly value={issue.description} className="min-h-[160px]" />
    </div>
  );
};

export default IssueDetailPage;
