import axios from "axios";

const baseURL = (import.meta.env.VITE_API_URL || "http://localhost:8080")
  .trim()
  .replace(/\/+$/, ""); // remove trailing slash(es)

const api = axios.create({ baseURL });

export default api;
