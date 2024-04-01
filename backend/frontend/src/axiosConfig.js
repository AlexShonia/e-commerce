import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://e-commerce-production-0fe3.up.railway.app/",
});
