import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

import { Icons } from "./icons";
import { SiteHeaderRight } from "./site-header-right";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          {siteConfig.mainNav?.length ? (
            <nav className="hidden gap-6 md:flex">
              {siteConfig.mainNav?.map(
                (item: NavItem, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </nav>
          ) : null}
        </div>
        <SiteHeaderRight />
      </div>
    </header>
  );
}
