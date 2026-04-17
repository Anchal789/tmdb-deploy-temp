// FilterContext.tsx
import {
	createContext,
	useContext,
	useReducer,
	type Dispatch,
	type ReactNode,
} from "react";
import type { DiscoverFiltersType } from "../types/filters";

type State = {
	filters: DiscoverFiltersType;
};

type Action =
	| { type: "SET_FILTERS"; payload: DiscoverFiltersType }
	| { type: "RESET_FILTERS" };

const initialState: DiscoverFiltersType = {
	"air_date.gte": null,
	"air_date.lte": null,
	certification: null,
	certification_country: null,
	debug: null,
	"first_air_date.gte": null,
	"first_air_date.lte": null,
	include_adult: null,
	include_softcore: null,
	"latest_ceremony.gte": null,
	"latest_ceremony.lte": null,
	page: null,
	"primary_release_date.gte": null,
	"primary_release_date.lte": null,
	region: null,
	"release_date.gte": null,
	"release_date.lte": null,
	show_me: null,
	sort_by: null,
	"vote_average.gte": null,
	"vote_average.lte": null,
	"vote_count.gte": null,
	watch_region: null,
	with_genres: null,
	with_keywords: null,
	with_networks: null,
	with_origin_country: null,
	with_original_language: null,
	with_watch_monetization_types: null,
	with_watch_providers: null,
	with_release_type: null,
	"with_runtime.gte": null,
	"with_runtime.lte": null,
};

const FilterContext = createContext<{
	state: State;
	dispatch: Dispatch<Action>;
} | null>(null);

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_FILTERS":
			return { ...state, filters: action.payload };

		case "RESET_FILTERS":
			return { ...state, filters: initialState };

		default:
			return state;
	}
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		filters: initialState,
	});

	return (
		<FilterContext.Provider value={{ state, dispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilters = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error("useFilters must be used within FilterProvider");
	}
	return context;
};
