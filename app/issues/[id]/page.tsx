import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    <>
    <div className="flex flex-col gap-6 md:flex-row   mx-4 md:mx-10 lg:mx-40  mt-10 ">
     
    <div className="flex flex-col gap-4 flex-1">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        {issue.title}
      </h2>
      <div className="flex flex-row gap-4 ">
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Textarea readOnly value={issue.description} className="min-h-[160px]" />
    </div>
    <div >
        <Button className="w-full md:w-max">
        <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
     </div>
    </div>
    </>
  );
};

export default IssueDetailPage;
