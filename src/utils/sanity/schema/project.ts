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
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: "project";
};

export default project;
