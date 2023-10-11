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

export type MorrisPic = {
  _id: string;
  id: number;
  _updatedAt: string;
  src: string;
  _createdAt: string;
  _rev: string;
  _type: "morris-pic";
  alt: string;
};

export default morris_pic;
