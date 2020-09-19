import client from "./client";

export const getPostsListAPI = () => client.get(`/posts`).then((r) => r.data);
