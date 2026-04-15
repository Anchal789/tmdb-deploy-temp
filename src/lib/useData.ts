import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { fetchData, postData } from "./axios";
import type {
	ApiResponse,
	MutationVariables,
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
		mutationFn: async ({ url, payload, params }) => {
			const response = await postData<TData>({ url, payload, params });
			return response.data;
		},
		...options,
	});
};
