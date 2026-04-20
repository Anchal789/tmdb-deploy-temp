// FilterContext.tsx
import {
	createContext,
	useContext,
	useReducer,
	type Dispatch,
	type ReactNode,
} from "react";
import type { DiscoverFiltersType } from "../types/filters";
import { FILTERS_INITIAL_STATE } from "../constants/filterConstants";

type State = {
	filters: DiscoverFiltersType;
};

type Action =
	| { type: "SET_FILTERS"; payload: DiscoverFiltersType }
	| { type: "RESET_FILTERS" };

const FilterContext = createContext<{
	state: State;
	dispatch: Dispatch<Action>;
} | null>(null);

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_FILTERS":
			return { ...state, filters: action.payload };
		default:
			return state;
	}
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		filters: FILTERS_INITIAL_STATE,
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
