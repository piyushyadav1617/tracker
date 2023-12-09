"use client";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from "./modeToggle";

import { usePathname } from "next/navigation";

import { UserNav } from "./user-nav";
import { Target,Menu } from "lucide-react";

const links = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Issues", link: "/issues/list" },
  { label: "+ New", link: "/issues/new" },
];
export const Navbar = () => {
  const path = usePathname();
 

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
    <nav  className="   flex  gap-6 h-14 mx-5 sm:mx-10 md:mx-auto  md:w-[700px] lg:w-[990px] 2xl:w-[1200px] items-center justify-between">
      <ul className="flex gap-2 sm:gap-6 items-center">
        <Link href={'/'}><Target  className="text-primary/60 hover:text-primary transition-colors" size={30}/></Link>
        <SheetDemo/>
        <div className="hidden sm:flex gap-6"> 
        {links.map((item) => {
          return (
            <li key={item.link} >
              <Link
                href={item.link}
                className={`${
                  item.link === path ? "text-primary" : "text-muted-foreground"
                } hover:text-primary transition-colors`}
              >
                {item.label}
              </Link>
            </li>
            
          );
        })}
        </div>
      </ul>
      <div className="flex flex-row gap-4 items-center">
        <ModeToggle />
        <UserNav />
      </div>
    </nav>
    </header>
  );
};


export function SheetDemo() {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="sm:hidden p-0" variant="ghost"><Menu className="h-8 w-8"/></Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="flex flex-col border-border sm:hidden w-60">
        <SheetHeader>
    
        </SheetHeader>
        {links.map((item) => {
          return (
            <li key={item.link} className="list-none w-full text-left ">
              <SheetClose asChild>
              <Link
                href={item.link}
                className={`${
                  item.link === path ? "text-primary" : "text-muted-foreground"
                } hover:text-primary transition-colors px-2 py-1  rounded-md w-full`}
              >
                {item.label}
              </Link>
              </SheetClose>
            </li>
          );
        })}
        <SheetFooter>

        </SheetFooter>
     
      </SheetContent>
    </Sheet>
  )
}
