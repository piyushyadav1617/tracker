import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
export default async function Home() {

  return (
<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-bottom sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          /> */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-5xl xl:text-6xl/none whitespace-nowrap ">
              Track, Tackle, <span className="text-primary">Triumph</span> 
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Empower Progress, Resolve with Precision: Tracking Issues, Transforming Solutions.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Start Now</Button>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Start tracking today.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
;