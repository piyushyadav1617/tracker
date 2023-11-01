import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Issues() {
    return (
     <div className="m-10">
      <Button>
         <Link href={'/issues/new'} className="w-40">Create issue</Link>
        </Button>
     </div>
    )
  }
  