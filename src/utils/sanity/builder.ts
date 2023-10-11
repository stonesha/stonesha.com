import { client } from "~/utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
