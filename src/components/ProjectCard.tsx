import { TagIcon } from "@heroicons/react/24/outline";
import type { Project } from "~/utils/sanity/schema/project";

type ProjectCardProps = Project;

export function ProjectCard({
  description,
  title,
  tags,
  github_url,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col items-start">
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a target="_blank" rel="noopener noreferrer" href={github_url}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </a>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200 items-center">
        <TagIcon className="h-4 w-4" />
        <div className="ml-2 flex flex-row space-x-1 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md my-1 inline-flex items-center bg-gray-50 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-400 ring-1 ring-inset ring-gray-600/20 group-hover:ring-teal-600/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </p>
    </div>
  );
}
