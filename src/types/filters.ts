import { SORTING_PAYLOAD_KEYS } from "./../constants/filterConstants";

export interface DiscoverFiltersType {
	"air_date.gte"?: string | null;
	"air_date.lte"?: string | null;
	certification?: string | null;
	certification_country?: string | null;
	debug?: string | null;
	"first_air_date.gte"?: string | null;
	"first_air_date.lte"?: string | null;
	include_adult?: boolean | null;
	include_softcore?: boolean | null;
	"latest_ceremony.gte"?: string | null;
	"latest_ceremony.lte"?: string | null;
	page?: number | null;
	"primary_release_date.gte"?: string | null;
	"primary_release_date.lte"?: string | null;
	region?: string | null;
	"release_date.gte"?: string | null;
	"release_date.lte"?: string | null;
	show_me?: string | null;
	sort_by?:
		| (typeof SORTING_PAYLOAD_KEYS)[keyof typeof SORTING_PAYLOAD_KEYS]
		| null;
	"vote_average.gte"?: number | null;
	"vote_average.lte"?: number | null;
	"vote_count.gte"?: number | null;
	watch_region?: string | null;
	with_genres?: string | null;
	with_keywords?: string | null;
	with_networks?: string | null;
	with_origin_country?: string | null;
	with_original_language?: string | null;
	with_watch_monetization_types?: string | null;
	with_watch_providers?: string | null;
	with_release_type?: number | string | null;
	"with_runtime.gte"?: number | null;
	"with_runtime.lte"?: number | null;
}

export interface CountriesType {
	english_name: string;
	iso_3166_1: string;
	native_name?: string;
	flagUrl?: string;
}

export interface LanguagesOptionsType {
	folded_name: string;
	english_name: string;
	iso_639_1: string | null;
	native_name?: string;
	count: number | null;
}

export interface OTTProviderType {
	results: Array<OTTProviderResponseType>;
}

export interface OTTProviderResponseType {
	display_priorities: Record<string, number>;
	display_priority: number;
	logo_path: string;
	provider_id: number;
	provider_name: string;
}

export interface GenreType {
	id: number;
	name: string;
}

export interface CertificationType {
	certification: string;
	meaning: string;
	order: number;
}

export interface TVNetworksResponseType {
	total_results: number;
	results: Array<TVNetworksType>;
}

export interface TVNetworksType {
	logo_path: string;
	name: string;
	id: number;
	origin_country: string;
}

export interface TvNetworksType {
	adult: boolean;
	backdrop_path: string;
	genre_ids: Array<number>;
	id: number;
	origin_country: Array<string>;
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	softcore: boolean;
	name: string;
	vote_average: number;
	vote_count: number;
}
