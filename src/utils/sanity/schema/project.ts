import type { BaseSchema } from "~/utils/sanity/schema";

const project = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Project Title",
    },
    {
      name: "description",
      type: "string",
      title: "Project Description",
    },
    {
      name: "github_url",
      type: "string",
      title: "Github URL",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      title: "Tags",
    },
  ],
};

export type Project = BaseSchema & {
  description: string;
  title: string;
  tags: string[];
  github_url: string;
  _type: "project";
};

export default project;
