"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Home } from "lucide-react";
import { ThemeToggle } from "~/components/theme-toggle";

export function SiteHeaderRight() {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1">
        <Link href="/" className="hover:text-rose-400 underline font-semibold">
          <Home />
        </Link>
        <UserButton afterSignOutUrl="/" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
