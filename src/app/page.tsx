import Link from "next/link";
import { client } from "~/utils/sanity/client";
import type { MorrisPic } from "~/utils/sanity/schema/morris_pic";
import clsx from "clsx";
import Image from "next/image";
import { urlFor } from "~/utils/sanity/builder";

export default async function Home() {
  const rotations = ["rotate-3", "-rotate-3"];
  const morris_pics = await client.fetch<MorrisPic[]>(
    `*[_type == "morris-pic"]`
  );

  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Fullstack developer and cat lover.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m Stone Sha, a software developer and cat lover based in Las
          Vegas, Nevada. I&apos;m currently working at The Armstrong Company as
          an Application Developer. I also play video games sometimes.
        </p>
        <div className="mt-6 flex gap-6">
          <Link
            href="https://github.com/stonesha"
            aria-label="Follow on GitHub"
            className="group -m-1 p-1"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/stone-sha-2a8040147/"
            aria-label="Connect on LinkedIn"
            className="group -m-1 p-1"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <p className="text-xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl mb-4">
          Here are some Morris pics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 overflow-hidden py-4 sm:gap-8">
          {morris_pics.map((morris_pic) => {
            const random_index = Math.round(Math.random());
            return (
              <div
                key={morris_pic.id}
                className={clsx(
                  "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-52 sm:rounded-2xl",
                  rotations[random_index]
                )}
              >
                <Image
                  src={urlFor(morris_pic.src).width(300).height(300).url()}
                  alt={morris_pic.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  sizes="300px, 300px"
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
