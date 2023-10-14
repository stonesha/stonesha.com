import type { BaseSchema } from "~/utils/sanity/schema";

const morris_pic = {
  name: "morris-pic",
  type: "document",
  title: "Morris Picture",
  fields: [
    {
      name: "id",
      type: "number",
      title: "Picture ID",
    },
    {
      name: "src",
      type: "string",
      title: "Asset URL",
    },
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
    },
  ],
};

export type MorrisPic = BaseSchema & {
  id: number;
  src: string;
  _type: "morris-pic";
  alt: string;
};

export default morris_pic;
