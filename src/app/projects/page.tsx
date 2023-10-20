import { Metadata } from "next";
import { ProjectCard } from "~/components/ProjectCard";
import { client } from "~/utils/sanity/client";
import { Project } from "~/utils/sanity/schema/project";

export const metadata: Metadata = {
  title: "Projects",
  description: "Various projects I've made for funsies",
};

export default async function Projects() {
  const projects = await client.fetch<Project[]>(`*[_type == "project"]`);

  return (
    <div>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Various projects I&apos;ve made for fun or for learning that I&apos;ve
          abandoned for one reason or another. The repos sit on Github and are
          open-source if you want to take a look. Ignore my naming scheme,
          naming things are hard.
        </p>
      </div>

      <div className="mt-16 sm:mt-20 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </div>
  );
}
