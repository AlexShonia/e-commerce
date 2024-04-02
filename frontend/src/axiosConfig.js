import axios from "axios";

export const axiosClient = axios.create({
	baseURL: "https://e-commerce-sportshop.up.railway.app",
});
