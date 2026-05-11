import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, postData } from "./apiFn";
import type {
	ApiResponse,
	APIResponseError,
	MutationVariables,
	UseAppInfiniteQueryProps,
	UseAppMutationProps,
	UseAppQueryProps,
} from "../types/common";

export const useData = <T>({
	queryKey,
	url,
	params,
	options,
}: UseAppQueryProps<T>) => {
	return useQuery<T, APIResponseError>({
		queryKey,
		queryFn: async () => {
			const response = await fetchData<T>({ url, params });
			return response;
		},
		...options,
	});
};

export const useMutateData = <TData>({
	options,
}: UseAppMutationProps<TData> = {}) => {
	return useMutation<TData, APIResponseError, MutationVariables>({
		mutationFn: async ({ url, payload, params, baseUrl }) => {
			const response = await postData<TData>({ url, payload, params, baseUrl });
			return response;
		},
		...options,
	});
};

export const useInfiniteData = <T>({
	queryKey,
	url,
	params,
	options,
}: UseAppInfiniteQueryProps<T>) => {
	return useInfiniteQuery<ApiResponse<T>, APIResponseError>({
		queryKey,
		initialPageParam: 1,

		queryFn: async ({ pageParam }) => {
			const response = await fetchData<ApiResponse<T>>({
				url,
				params: {
					...params,
					page: pageParam,
				},
			});
			return response;
		},
		...options,

		getNextPageParam: (lastPage) => {
			return lastPage.page < lastPage.total_pages
				? lastPage.page + 1
				: undefined;
		},
	});
};
