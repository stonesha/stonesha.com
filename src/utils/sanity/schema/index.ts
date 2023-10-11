import { type SchemaTypeDefinition } from "sanity";
import morris_pic from "~/utils/sanity/schema/morris_pic";

export default {
  types: [morris_pic],
} satisfies { types: SchemaTypeDefinition[] };
