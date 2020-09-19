import client from "./client";

export const postNewPostAPI = ({ title, body }) =>
  client.post(`/posts`, { title, body }).then((r) => r.data);
