import type {
	InfiniteData,
	UseInfiniteQueryOptions,
	UseMutationOptions,
	UseQueryOptions,
} from "@tanstack/react-query";
import type { DiscoverFiltersType } from "./filters";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import type { ElementType, ReactNode } from "react";
import type { AutocompleteProps, ChipTypeMap, TextFieldProps } from "@mui/material";

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

export interface State {
	filters: DiscoverFiltersType;
	appliedFilters: DiscoverFiltersType;
	isDirty: boolean;
	isFiltered: boolean;
}

export type Action =
	| { type: "SET_FILTERS"; payload: DiscoverFiltersType }
	| { type: "APPLY_FILTERS" }
	| { type: "INIT_PAGE_FILTERS"; payload: DiscoverFiltersType };

export interface CustomDatePickerProps extends DatePickerProps {
	error?: boolean;
	helperText?: ReactNode;
	placeholder?: string;
	textFieldProps?: TextFieldProps;
}

export type AppAutocompleteProps<
	T,
	Multiple extends boolean | undefined = false,
	DisableClearable extends boolean | undefined = false,
	FreeSolo extends boolean | undefined = false,
	ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
> = AutocompleteProps<
	T,
	Multiple,
	DisableClearable,
	FreeSolo,
	ChipComponent
> & {
	label?: string;
	placeholder?: string;
	error?: boolean;
	helperText?: string;
	textFieldProps?: Omit<
		TextFieldProps,
		"label" | "placeholder" | "error" | "helperText"
	>;
	className?: string;
};
