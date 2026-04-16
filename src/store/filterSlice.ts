import { createSlice } from "@reduxjs/toolkit";
import type { DiscoverFiltersType } from "../types/filters";

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

const filterSlice = createSlice({
    name: 'filters',
    initialState: {filters : initialState},
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
});
    
export const { setFilters } = filterSlice.actions;
export default filterSlice;