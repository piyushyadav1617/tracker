import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IssueTable } from "./table";



export default async function Issues() {


  return (
      <div className="flex flex-col gap-8 mt-10 mx-5 sm:mx-10 lg:mx-40">
     
        <div className="flex flex-col">
         <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks!
            </p>
          </div>
          <Button asChild>
          <Link href={'/issues/new'}>+</Link>
          </Button>
          </div>
        </div>
        <div>
         <IssueTable/>
        </div>
      
      </div>
  )
}
