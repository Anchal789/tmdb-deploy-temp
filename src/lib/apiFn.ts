import request from "../helpers/api-requests";

export const fetchData = <T>({
	url,
	params,
}: {
	url: string;
	params?: Record<string, any>;
}) => {
	return request<T>({ url, params });
};

export const postData = <T>({
	url,
	payload,
	params,
	baseUrl,
}: {
	url: string;
	payload: any;
	params?: Record<string, any>;
	baseUrl?: string;
}) => {
	return request<T>({
		url,
		method: "POST",
		body: payload,
		params,
		baseUrl,
	});
};
