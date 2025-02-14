import client from "@/utils/contentful";
import * as contentful from "contentful";

export const getPosts = async () => {
  const response = await client.getEntries<{
    contentTypeId: "post";
    fields: {
      title: contentful.EntryFieldTypes.Text;
      content: contentful.EntryFieldTypes.Text;
    };
  }>({ content_type: "post" });
  return response.items;
};
