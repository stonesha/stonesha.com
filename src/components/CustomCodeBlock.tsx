"use client";

import { CodeBlock, dracula } from "react-code-blocks";
import type { Snippet } from "~/utils/sanity/schema/snippet";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function CustomCodeBlock(snippet: Snippet) {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-lg font-medium text-zinc-900 hover:bg-zinc-200 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500/75 mb-1 items-center">
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
            <Disclosure.Panel>
              <CodeBlock
                text={snippet.code.code}
                language={snippet.code.language}
                showLineNumbers
                theme={dracula}
              />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
