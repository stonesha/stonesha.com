import { Metadata } from "next";
import { WorkSection } from "~/components/WorkSection";
import { client } from "~/utils/sanity/client";
import { Workplace } from "~/utils/sanity/schema/workplace";

export const metadata: Metadata = {
  title: "Work",
  description: "Places I've worked at, coding or not.",
};

export default async function Work() {
  const workplaces = await client.fetch<Workplace[]>(`*[_type == "workplace"]`);
  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Places I&apos;ve worked at
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          These are the places I&apos;ve worked at professionally. Whether it
          was writing code or something else. Feel free to read through and get
          an idea of my experience and skills.
        </p>
      </div>
      <div className="space-y-20 mt-10">
        {workplaces.map((workplace) => (
          <WorkSection key={workplace._id} {...workplace} />
        ))}
      </div>
    </>
  );
}
