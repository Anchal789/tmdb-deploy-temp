import axios from "axios";

const tmdbApi = (baseUrl?: string) => {
	return axios.create({
		baseURL: baseUrl || "https://api.themoviedb.org/3",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
		},
	});
};

export const fetchData = <T>({
	url,
	params,
}: {
	url: string;
	params?: any;
}) => {
	return tmdbApi().get<T>(url, { params });
};

export const postData = <T>({
	url,
	payload,
	params,
	baseUrl,
}: {
	url: string;
	payload: any;
	params?: any;
	baseUrl?: string;
}) => {
	return tmdbApi(baseUrl).post<T>(url, payload, { params });
};
