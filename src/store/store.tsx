// FilterContext.tsx
import {
	createContext,
	useContext,
	useReducer,
	type Dispatch,
	type ReactNode,
} from "react";
import { FILTERS_INITIAL_STATE } from "../constants/filterConstants";
import type { Action, State } from "../types/common";

const FilterContext = createContext<{
	state: State;
	dispatch: Dispatch<Action>;
} | null>(null);

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_FILTERS":
			return { ...state, filters: action.payload, isDirty: true };
		case "APPLY_FILTERS":
			return {
				...state,
				appliedFilters: state.filters,
				isDirty: false,
				isFiltered: true,
			};
		case "INIT_PAGE_FILTERS":
			return {
				...state,
				filters: action.payload,
				appliedFilters: action.payload,
				isDirty: false,
				isFiltered: false,
			};
		case "TOGGLE_DRAWER":
			return { ...state, isDrawerOpen: !state.isDrawerOpen };
		default:
			return state;
	}
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		filters: FILTERS_INITIAL_STATE,
		appliedFilters: FILTERS_INITIAL_STATE,
		isDirty: false,
		isFiltered: false,
		isDrawerOpen: false,
	});

	return (
		<FilterContext.Provider value={{ state, dispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useGlobalState = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error("useGlobalState must be used within FilterProvider");
	}
	return context;
};
