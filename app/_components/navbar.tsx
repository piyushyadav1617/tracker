"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import { useSession } from "next-auth/react";

export const Navbar = () => {
  const path = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", link: "/" },
    { label: "Issues", link: "/issues/list" },
    { label: "+", link: "/issues/new" },
  ];

  return (
    <nav className="flex gap-6 h-14  mx-5 items-center  justify-between  sm:mx-10 lg:mx-60">
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
      <div className="flex flex-row gap-4 items-center">
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};
