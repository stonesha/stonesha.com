/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */
import { media } from "sanity-plugin-media";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";

import schema from "~/utils/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    media(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({
      defaultApiVersion:
        process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-11",
    }),
    codeInput({
      codeModes: [
        {
          name: "rust",
          loader: () =>
            import("@codemirror/lang-rust").then(({ rust }) => rust()),
        },
        {
          name: "sql",
          loader: () => import("@codemirror/lang-sql").then(({ sql }) => sql()),
        },
      ],
    }),
  ],
});
