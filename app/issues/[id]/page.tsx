import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileEdit } from "lucide-react";
import DeleteIssueButton from "./deleteIssueButton";
import { AssigneeSelect } from "./assigneeSelect";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row   mx-5  sm:mx-10 lg:mx-60  mt-10 ">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            {issue.title}
          </h2>
          <div className="flex flex-row gap-4 ">
            <p>{issue.status}</p>
            <p>{issue.createdAt.toDateString()}</p>
          </div>
          <Textarea
            readOnly
            value={issue.description}
            className="min-h-[160px] border-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        {session && (
          <div className="flex flex-col gap-4">
            <AssigneeSelect issue={issue}/>
            <Button className="w-full ">
              <Link
                href={`/issues/${issue.id}/edit`}
                className="w-full flex flex-row gap-2 justify-center items-center"
              >
                <FileEdit />
                Edit Issue
              </Link>
            </Button>
            <DeleteIssueButton issueId={issue.id} />
          </div>
        )}
      </div>
    </>
  );
};

export default IssueDetailPage;
