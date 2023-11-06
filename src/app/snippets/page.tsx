import { Metadata } from "next";
import { client } from "~/utils/sanity/client";
import { Snippet } from "~/utils/sanity/schema/snippet";
import { CustomCodeBlock } from "~/components/CustomCodeBlock";

export const metadata: Metadata = {
  title: "Snippets",
  description:
    "These are code snippets I use frequently and always forget. So I've collected them here.",
};

export default async function Snippets() {
  const snippets = await client.fetch<Snippet[]>(`*[_type == "snippet"]`);
  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Snippets
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          These are code snippets I find neat, use frequently, or always forget.
          So I&apos;ve collected them here.
        </p>
      </div>
      <div className="space-y-20 mt-10">
        {snippets.map((snippet) => (
          <CustomCodeBlock key={snippet._id} {...snippet} />
        ))}
      </div>
    </>
  );
}
