import { type Metadata } from "next";

import "~/styles/tailwind.css";
import { Providers } from "~/app/providers";
import { Layout } from "~/components/Layout";
import { Inter } from "next/font/google";
import clsx from "clsx";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Stone Sha",
    default: "Stone Sha - Fullstack Developer",
  },
  description:
    "I'm Stone, a software developer based in Las Vegas, Nevada. I'm currently working at Armstrong Relocation as an Application Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(`h-full antialiased ${inter.className}`)}
      suppressHydrationWarning
    >
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
