import axios from "axios";

const client = axios.create({ baseURL: "https://simple-blog-api.crew.red" });

export default client;
