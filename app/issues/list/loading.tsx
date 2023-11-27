import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
export default function IssuesLoading() {
  const list = [1, 2, 3, 4];
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
            <Link href={"/create-issue"}>+</Link>
          </Button>
        </div>
      </div>
      <div className="mb-10">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Skeleton className="h-6" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-6" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-6" />
                </TableHead>
                <TableHead>
                  <Skeleton className="h-6" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
