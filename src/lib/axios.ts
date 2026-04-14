import axios from "axios";

export const fetchData = <T>({
	url,
	params,
}: {
	url: string;
	params?: Record<string, string | number | boolean>;
}) => {
	return axios
		.create({
			baseURL: "https://api.themoviedb.org/3",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
			},
			params: { ...params },
		})
		.get<T>(url);
};

export const postData = <T>({
	url,
	payload,
	params,
}: {
	url: string;
	payload: Record<string, string | number | boolean | object | []>;
	params?: Record<string, string | number | boolean>;
}) => {
	return axios
		.create({
			baseURL: "https://api.themoviedb.org/3",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
			},
			params: { ...params },
		})
		.post<T>(url, payload);
};
