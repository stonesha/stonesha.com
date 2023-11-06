"use client";

import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import type { Snippet } from "~/utils/sanity/schema/snippet";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export function CustomCodeBlock(snippet: Snippet) {
  let { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "light" ? atomOneLight : atomOneDark;

  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className="flex w-full justify-between rounded-lg 
          bg-zinc-100 px-4 py-2 text-left text-lg font-medium text-zinc-900 dark:hover:bg-zinc-700/50
           hover:bg-zinc-200 mb-1 items-center dark:text-zinc-100 dark:bg-zinc-800/50"
          >
            {snippet.title}
            <ChevronRightIcon
              className={`${open ? "rotate-90 transform" : ""} w-8 h-8`}
            />
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="div" className="shadow-md rounded-md">
              <CodeBlock
                language={snippet.code.language}
                showLineNumbers
                text={snippet.code.code}
                theme={theme}
              />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
