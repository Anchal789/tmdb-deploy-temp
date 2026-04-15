import type { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export interface UseAppQueryProps<TData> {
	queryKey: any[];
	url: string;
	params?: Record<string, any>;
	options?: Omit<
		UseQueryOptions<TData, AxiosError, TData>,
		"queryKey" | "queryFn"
	>;
}

export interface MutationVariables {
	url: string;
	payload: any;
	params?: Record<string, any>;
}

export interface UseAppMutationProps<TData, TVariables = MutationVariables> {
	options?: UseMutationOptions<TData, AxiosError, TVariables>;
}

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export interface OTTProviderType {
	name: string;
	id: number;
	imgUrl: string;
	type: "both" | "movie_only" | "tv_only";
}

export interface CountryOptionType {
	name: string;
	countryCode: string;
	flagUrl: string;
}
