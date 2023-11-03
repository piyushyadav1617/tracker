"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const path = usePathname();
  const links = [
    { label: "Dashboard", link: "/" },
    { label: "Issues", link: "/issues/list" },
    { label: "+", link: "/create-issue" },
  ];

  return (
    <nav className="flex gap-6 h-14  px-5 items-center  justify-between sm:justify-around">
      <ul className="flex gap-6">
        {links.map((item) => {
          return (
            <li key={item.link}>
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
      </ul>
      <ModeToggle />
    </nav>
  );
};
