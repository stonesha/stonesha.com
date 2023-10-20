import { type SchemaTypeDefinition } from "sanity";
import morris_pic from "~/utils/sanity/schema/morris_pic";
import project from "~/utils/sanity/schema/project";
import workplace from "~/utils/sanity/schema/workplace";

export default {
  types: [morris_pic, project, workplace],
} satisfies { types: SchemaTypeDefinition[] };

export type BaseSchema = {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
};
