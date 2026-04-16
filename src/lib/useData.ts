import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchData, postData } from "./axios";
import type {
	ApiResponse,
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
}: UseAppQueryProps<ApiResponse<T>>) => {
	return useQuery<ApiResponse<T>, AxiosError>({
		queryKey,
		queryFn: async () => {
			const response = await fetchData<ApiResponse<T>>({ url, params });
			return response.data;
		},
		...options,
	});
};

export const useMutateData = <TData>({
	options,
}: UseAppMutationProps<TData> = {}) => {
	return useMutation<TData, AxiosError, MutationVariables>({
		mutationFn: async ({ url, payload, params, baseUrl }) => {
			const response = await postData<TData>({ url, payload, params, baseUrl });
			return response.data;
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
	return useInfiniteQuery<ApiResponse<T>, AxiosError>({
		queryKey,
		initialPageParam: 1,

		queryFn: async ({ pageParam }) => {
			const response = await fetchData<ApiResponse<T>>({
				url,
				params: {
					page: pageParam,
					...params,
				},
			});
			return response.data;
		},

		getNextPageParam: (lastPage) => {
			return lastPage.page < lastPage.total_pages
				? lastPage.page + 1
				: undefined;
		},

		...options,
	});
};