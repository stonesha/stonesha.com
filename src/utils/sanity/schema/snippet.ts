import type { BaseSchema } from "~/utils/sanity/schema";

// basically https://github.com/sanity-io/code-input/blob/ec2dcef85c506fd911cea5b05274e1c78dfc6fde/src/config.ts#L4 but with rust
const LANGUAGES = [
  { title: "Batch file", value: "batchfile" },
  { title: "C#", value: "csharp" },
  { title: "CSS", value: "css" },
  { title: "Go", value: "golang" },
  { title: "GROQ", value: "groq" },
  { title: "HTML", value: "html" },
  { title: "Java", value: "java" },
  { title: "JavaScript", value: "javascript" },
  { title: "JSON", value: "json" },
  { title: "JSX", value: "jsx" },
  { title: "Markdown", value: "markdown" },
  { title: "MySQL", value: "mysql" },
  { title: "PHP", value: "php" },
  { title: "Plain text", value: "text" },
  { title: "Python", value: "python" },
  { title: "Ruby", value: "ruby" },
  { title: "Rust", value: "rust" },
  { title: "SASS", value: "sass" },
  { title: "SCSS", value: "scss" },
  { title: "sh", value: "sh" },
  { title: "SQL", value: "sql" },
  { title: "TSX", value: "tsx" },
  { title: "TypeScript", value: "typescript" },
  { title: "XML", value: "xml" },
  { title: "YAML", value: "yaml" },
];

const snippet = {
  name: "snippet",
  type: "document",
  title: "Code Snippet",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "code",
      type: "code",
      title: "Code",
      options: {
        withFilename: true,
        highlightedLines: true,
        languageAlternatives: LANGUAGES,
      },
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      title: "Tags",
    },
    {
      name: "sources",
      type: "array",
      of: [{ type: "url" }],
      title: "Sources",
    },
  ],
};

export type Snippet = BaseSchema & {
  code: {
    code: string;
    _type: "code";
    language: string;
  };
  sources: string[];
  title: string;
  tags: string[];
  _type: "snippet";
};

export default snippet;
