import Header from "~/components/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto mb-12">
          <div className="mx-auto w-full px-5 lg:px-20 md:max-w-2xl lg:max-w-5xl xl:px-0">
            <div className="sm:mt-16">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
