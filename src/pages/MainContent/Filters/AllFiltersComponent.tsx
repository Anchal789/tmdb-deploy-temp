import {
	COUNTRY_OPTIONS,
	SORT_BY_OPTIONS,
} from "../../../constants/filterConstants";
import Accordion from "../../../components/Accordion";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextFielld";
import styles from "./AllFiltersComponent.module.scss";
import { useFilters } from "../../../store/store";
import Typography from "../../../components/Typography";
import { useState, type FunctionComponent } from "react";
import type {
	CountriesType,
	DiscoverFiltersType,
	OTTProviderType,
} from "../../../types/filters";
import AccordionDetails from "../../../components/AccordionDetails";
import { Box } from "@mui/material";
import Checkbox from "../../../components/Checkbox";
import WhereToWatchFilter from "./WhereToWatchTab";
import FilterTab from "./FiltersTab";
import { useLocation } from "react-router";
import { useData } from "../../../lib/useData";

const AllFiltersComponent: FunctionComponent<{
	countriesData: Array<CountriesType>;
}> = ({ countriesData }) => {
	const [countriesCount, setCountriesCount] = useState<number>(0);
	const { state, dispatch } = useFilters();
	const { filters } = state;

	const pageUrl = useLocation().pathname;

	const selectedCountry = COUNTRY_OPTIONS.find(
		(item) => item.iso_3166_1 === filters.watch_region,
	);

	const { data } = useData<OTTProviderType>({
		queryKey: ["ott_providers", filters.watch_region, pageUrl],
		url: `/watch/providers/${pageUrl.includes("movie") ? "movie" : "tv"}`,
		params: { language: "en-US", watch_region: selectedCountry?.iso_3166_1 },
	});

	const ottProviders = data?.results || [];

	return (
		<div className={styles.filtersContainer}>
			<Accordion title='Sort'>
				<AccordionDetails>
					Sort Result By
					<Autocomplete
						options={SORT_BY_OPTIONS.map((option) => option.label)}
						value={
							SORT_BY_OPTIONS.find(
								(option) =>
									(option.value as DiscoverFiltersType) === filters.sort_by,
							)?.label
						}
						defaultValue={"Popularity Descending"}
						renderInput={() => <TextField />}
						onChange={(_event, value) =>
							dispatch({
								type: "SET_FILTERS",
								payload: {
									...filters,
									sort_by: SORT_BY_OPTIONS.find(
										(option) => option.label === value,
									)?.value as typeof filters.sort_by,
								},
							})
						}
						disableClearable
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion
				title={
					<div className={styles.whereToWatchTitleContainer}>
						<Typography fontWeight={600}>Where To Watch</Typography>
						<Typography
							sx={{ fontSize: ".875rem" }}
							className={styles.countryCount}
						>
							{countriesCount}
						</Typography>
					</div>
				}
			>
				<AccordionDetails
					sx={{
						borderBottom: "1px solid #e5e7eb",
						borderRadius: "8px 8px 0 0",
					}}
				>
					<Typography fontWeight={300}>My Services</Typography>
					<Box display={"flex"} alignItems={"center"}>
						<Checkbox disabled />
						<Typography>
							Restrict searches to my subscribed services?
						</Typography>
					</Box>
				</AccordionDetails>
				<AccordionDetails>
					<WhereToWatchFilter
						countriesData={countriesData}
						setCountriesCount={setCountriesCount}
						ottProviders={ottProviders}
						selectedCountry={selectedCountry}
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion title={"Filters"} defaultExpanded>
				<FilterTab
					countriesData={countriesData}
					selectedCountry={selectedCountry}
				/>
			</Accordion>
		</div>
	);
};

export default AllFiltersComponent;
