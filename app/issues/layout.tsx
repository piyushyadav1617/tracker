import { Suspense } from "react";
import IssuesLoading from "./loading";
import Issues from "./page";

export default function IssueLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      
      <Suspense fallback={<IssuesLoading />}><Issues/></Suspense>
    </>
  );
}
