import type {
	InfiniteData,
	UseInfiniteQueryOptions,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";

export interface UseAppQueryProps<TData> {
	queryKey: any[];
	url: string;
	params?: Record<string, any>;
	options?: Omit<
		UseQueryOptions<TData, APIResponseError, TData>,
		"queryKey" | "queryFn"
	>;
}

export type UseAppInfiniteQueryProps<T> = {
	queryKey: readonly unknown[];
	url: string;
	params?: Record<string, any>;
	options?: Omit<
		UseInfiniteQueryOptions<
			ApiResponse<T>,
			APIResponseError,
			InfiniteData<ApiResponse<T>>,
			readonly unknown[]
		>,
		"queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
	>;
};

export interface MutationVariables {
	url: string;
	payload: any;
	params?: Record<string, any>;
	baseUrl?: string;
}

export interface UseAppMutationProps<TData, TVariables = MutationVariables> {
	options?: UseMutationOptions<TData, APIResponseError, TVariables>;
}

export interface ApiResponse<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface APIResponseError {
	status_code: number;
	status_message: string;
	success: boolean;
}

export interface OTTProviderType {
	name: string;
	id: number;
	imgUrl: string;
	type: "both" | "movie_only" | "tv_only";
}
