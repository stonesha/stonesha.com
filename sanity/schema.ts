import { type SchemaTypeDefinition } from "sanity";

const morris_pic = {
  name: "morris-pic",
  type: "document",
  title: "Morris Picture",
  fields: [
    {
      name: "src",
      type: "string",
      title: "Image Source",
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [morris_pic],
};
