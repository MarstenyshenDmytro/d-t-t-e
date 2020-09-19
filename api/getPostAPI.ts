import client from "./client";

export const getPostAPI = (id) =>
  client.get(`/posts/${id}?_embed=comments`).then((r) => r.data);
