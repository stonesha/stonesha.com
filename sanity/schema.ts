import { type SchemaTypeDefinition } from "sanity";

const morris_pic = {
  name: "morris-pic",
  type: "document",
  title: "Morris Picture",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
    },
    {
      name: "src",
      type: "string",
      title: "Image Source",
    },
    {
      name: "id",
      type: "number",
      title: "Picture ID",
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [morris_pic],
};
