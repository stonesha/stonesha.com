export function WorkSection({
  skills,
  name,
  description,
  start_date,
  end_date,
}: {
  skills: string[];
  name: string;
  description: string;
  logo_url: string;
  start_date: string;
  end_date: string;
}) {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-5">
        <div className="flex flex-col space-y-4 md:col-span-2">
          <div>
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {name}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {start_date.slice(0, -3)} - {end_date.slice(0, -3)}
            </p>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <div className="md:col-span-3 ml-4 md:ml-0">
          <ul className="space-y-2 list-disc text-sm">
            {skills.map((skill, index) => (
              <li key={index} className="text-zinc-600 dark:text-zinc-400">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
