import "~/styles/globals.css";
import { SiteHeader } from "~/components/site-header";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import { siteConfig } from "~/config/site";
import { fontSans } from "~/lib/fonts";
import { cn } from "~/lib/utils";

import { ClientProviders } from "./client-providers";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "App-Router",
    "TRPC",
    "Edge",
    "Drizzle",
    "PlanetScale",
    "T3",
    "Stack",
    "Tailwind",
    "shadcn/ui",
    "Radix",
  ],
  authors: [
    {
      name: "Oleksandr Ploskovytskyy",
      url: "",
    },
  ],
  creator: "Oleksandr Ploskovytskyy",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@o_ploskovytskyy",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

type RootLayoutProps = PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <ClientProviders>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <footer className="bg-gradient-to-l from-rose-100 to-teal-100 dark:from-rose-100/80 dark:to-teal-100/80 text-stone-900">
                <div className="grid md:flex container md:items-center md:justify-between gap-2 md:gap-4 py-3 md:py-6 text-sm">
                  <p>
                    Built by{" "}
                    <a
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold underline underline-offset-4"
                    >
                      @juancamiloqhz
                    </a>
                  </p>
                  <p>
                    The source code is available on{" "}
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </footer>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </ClientProviders>
    </html>
  );
}
