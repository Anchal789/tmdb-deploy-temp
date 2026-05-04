const getHeaders = () => ({
	"Content-Type": "application/json",
	Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
	"Cache-Control": "no-cache",
});

const request = async <T>({
	url,
	method = "GET",
	params,
	body,
	baseUrl,
}: {
	url: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	params?: Record<string, any>;
	body?: any;
	baseUrl?: string;
}): Promise<T> => {
	try {
		const queryString = params
			? `?${new URLSearchParams(
					Object.entries(params).reduce(
						(acc, [key, value]) => {
							if (value !== null && value !== undefined) {
								acc[key] = String(value);
							}
							return acc;
						},
						{} as Record<string, string>,
					),
				).toString()}`
			: "";

		const response = await fetch(
			`${baseUrl || import.meta.env.VITE_BASE_API_URL}${url}${queryString}`,
			{
				method,
				headers: getHeaders(),
				body: body ? JSON.stringify(body) : undefined,
				cache: "no-cache",
			},
		);
		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));

			throw {
				status: response.status,
				message: errorData.status_message || "Something went wrong",
			};
		}

		const data = await response.json();
		return data as T;
	} catch (error: any) {
		throw {
			message: error.message || "Network error",
			status: error.status || 500,
		};
	}
};

export default request;
