"use client";

import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import type { Snippet } from "~/utils/sanity/schema/snippet";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import {
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export function CustomCodeBlock(snippet: Snippet) {
  let [copied, setCopied] = useState(false);
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
            <div className="flex flex-row space-x-1 items-center">
              <span className="rounded-md my-1 inline-flex items-center bg-gray-50 dark:bg-zinc-800 px-2 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-400 ring-1 ring-inset ring-gray-600/20 group-hover:ring-teal-600/20">
                {snippet.code.language}
              </span>
              <ChevronRightIcon
                className={`${open ? "rotate-90 transform" : ""} w-8 h-8`}
              />
            </div>
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
              <button
                onClick={() => {
                  navigator.clipboard.writeText(snippet.code.code);
                  setCopied((copied) => !copied);
                }}
                className="absolute top-5 right-5 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-200/20"
              >
                {copied ? (
                  <ClipboardDocumentCheckIcon className="w-5 h-5 text-teal-400" />
                ) : (
                  <ClipboardDocumentListIcon className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                )}
              </button>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
