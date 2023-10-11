import { type Metadata } from "next";

import "~/styles/tailwind.css";
import { Providers } from "~/app/providers";
import { Layout } from "~/components/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Stone Sha",
    default: "Stone Sha - Fullstack Developer",
  },
  description:
    "I'm Stone, a software developer based in Las Vegas, Nevada. I'm currently working at Armstrong Relocation as an Application Developer.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex flex-col items-center w-full h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
