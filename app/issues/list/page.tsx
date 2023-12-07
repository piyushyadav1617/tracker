import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns } from "./column";
import prisma from "@/prisma/client";
import { Metadata } from "next";

async function Issues() {
  const data: any = await prisma.issue.findMany();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks!
            </p>
          </div>
          <Button asChild>
            <Link href={"/issues/new"}>+</Link>
          </Button>
        </div>
      </div>
      <div className="mb-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues",
};
export default Issues;
export const dynamic = "force-dynamic";
