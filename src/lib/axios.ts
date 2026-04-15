import axios from "axios";

const tmdbApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
	},
});

export const fetchData = <T>({ url, params }: { url: string; params?: any }) => {
  return tmdbApi.get<T>(url, { params }); 
};

export const postData = <T>({ url, payload, params }: { url: string; payload: any; params?: any }) => {
  return tmdbApi.post<T>(url, payload, { params });
};	