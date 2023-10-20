import type { BaseSchema } from "~/utils/sanity/schema";

const workplace = {
  name: "workplace",
  type: "document",
  title: "Workplace",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Workplace Name",
    },
    {
      name: "start_date",
      type: "date",
      title: "Start Date",
    },
    {
      name: "end_date",
      type: "date",
      title: "End Date",
    },
    {
      name: "description",
      type: "string",
      title: "Workplace Description",
    },
    {
      name: "skills",
      type: "array",
      of: [{ type: "string" }],
      title: "Skills",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      title: "Workplace Tags",
    },
  ],
};

export type Workplace = BaseSchema & {
  name: string;
  description: string;
  skills: string[];
  tags: string[];
  start_date: string;
  end_date: string;
  _type: "workplace";
};

export default workplace;
