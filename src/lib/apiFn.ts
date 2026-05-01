import request from "../helpers/apiRequests";

export const fetchData = <T>({
	url,
	params,
	baseUrl
}: {
	url: string;
	params?: Record<string, any>;
	baseUrl?: string;
}) => {
	return request<T>({ url, params, baseUrl });
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
