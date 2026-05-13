import {
	COUNTRY_OPTIONS,
	MENU_PAPER_PROPS,
	SELECT_STYLES,
	SORT_BY_OPTIONS,
	withMenuProps,
} from "../../../constants/filterConstants";
import Accordion from "../../../components/Accordion";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextField";
import styles from "./AllFiltersComponent.module.scss";
import { useGlobalState } from "../../../store/store";
import Typography from "../../../components/Typography";
import { lazy, useEffect, useState, type FunctionComponent } from "react";
import type { CountriesType, OTTProviderType } from "../../../types/filters";
import AccordionDetails from "../../../components/AccordionDetails";
import { Box, ListSubheader, MenuItem, Select } from "@mui/material";
import Checkbox from "../../../components/Checkbox";
import { useLocation } from "react-router";
import { useData } from "../../../lib/useData";
import QuestionMarkTooltip from "../../../components/QuestionMarkTooltip";
import CustomTooltip from "../../../components/Tooltip";

const WhereToWatchFilter = lazy(() => import("./WhereToWatchTab"));
const FilterTab = lazy(() => import("./FilterTab/FiltersTab"));

const AllFiltersComponent: FunctionComponent<{
	countriesData: Array<CountriesType>;
}> = ({ countriesData }) => {
	const { state, dispatch } = useGlobalState();
	const { filters } = state;

	const [countriesCount, setCountriesCount] = useState<number>(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [filterTabExpand, setFilterTabExpand] = useState<boolean>(
		window.innerWidth < 1160,
	);

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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1160) {
				setFilterTabExpand(false);
			} else {
				setFilterTabExpand(true);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={styles.filtersContainer}>
			<Accordion title='Sort'>
				<AccordionDetails>
					<Typography
						fontWeight={300}
						mb={"10px"}
						sx={{
							lineHeight: "1rem",
							color: "#000",
							display: "inline-flex",
							alignItems: "center",
						}}
					>
						Sort Results By
					</Typography>
					<Select
						fullWidth
						displayEmpty
						onOpen={() => {
							setIsOpen(true);
						}}
						open={isOpen}
						onClose={() => setIsOpen(false)}
						renderValue={() =>
							SORT_BY_OPTIONS.find((option) => option.value === filters.sort_by)
								?.label
						}
						defaultValue={"popularity.desc"}
						MenuProps={{
							autoFocus: false,
							PaperProps: withMenuProps({
								width: "226.4px",
								height: "217.6px",
								overflow: "auto",
								paddingBottom: "0.5rem",
							}),
							anchorOrigin: { vertical: "bottom", horizontal: "left" },
							transformOrigin: { vertical: "top", horizontal: "left" },
						}}
						IconComponent={() => (
							<Box
								onClick={(e) => {
									e.stopPropagation();
									setIsOpen((prev) => !prev);
								}}
								sx={{
									padding: "0.375rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									cursor: "pointer",
								}}
							>
								<svg
									viewBox='0 0 512 512'
									focusable='false'
									xmlns='http://www.w3.org/2000/svg'
									fill='#212529'
									width={"1rem"}
									height={"1rem"}
								>
									<path d='M256 352 128 160h256z'></path>
								</svg>
							</Box>
						)}
						sx={{
							...SELECT_STYLES,
							"& .MuiSelect-select": {
								padding: ".375rem .75rem",
								fontSize: "14px",
								lineHeight: "1.5rem",
							},
							marginBottom: "10px",
						}}
					>
						<ListSubheader
							sx={{
								padding: "0.25rem 0 .5rem 0",
								backgroundColor: "white",
								zIndex: 10,
								position: "sticky",
								top: 0,
							}}
							onKeyDown={(e) => e.stopPropagation()}
						>
							{SORT_BY_OPTIONS.map((option) => (
								<MenuItem
									key={option.value || "none"}
									value={option.value || ""}
									selected={option.value === filters.sort_by}
									onClick={() => {
										dispatch({
											type: "SET_FILTERS",
											payload: {
												...filters,
												sort_by: option.value,
											},
										});
									}}
									sx={{
										padding: "0.25rem 1rem",
										"&.Mui-selected": {
											backgroundColor: "#01b3e4 !important",
											color: "#fff",
											"&:hover": { backgroundColor: "#032541 !important" },
										},
									}}
								>
									{option.label}
								</MenuItem>
							))}
						</ListSubheader>
					</Select>
				</AccordionDetails>
			</Accordion>
			<Accordion
				title={
					<div className={styles.whereToWatchTitleContainer}>
						<Typography
							fontWeight={600}
							color='text.primary'
							sx={{
								fontSize: "1.1rem",
								lineHeight: "1",
							}}
						>
							Where To Watch
						</Typography>
						<Typography
							sx={{ fontSize: ".875rem", lineHeight: "1", height: "100%" }}
							fontWeight={300}
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
					<Typography
						fontWeight={300}
						mb={"10px"}
						sx={{
							lineHeight: "16px",
							color: "#000",
							display: "inline-flex",
							alignItems: "center",
						}}
					>
						My Services{" "}
						<CustomTooltip
							title={"Log in to manage your subscribed services."}
							sx={{ display: "flex" }}
						>
							<span>
								<QuestionMarkTooltip />
							</span>
						</CustomTooltip>
					</Typography>
					<Box display={"flex"} alignItems={"center"}>
						<Checkbox disabled />
						<Typography sx={{ ml: ".5rem", lineHeight: "1.5" }}>
							Restrict searches to my subscribed services?
						</Typography>
					</Box>
				</AccordionDetails>
				<AccordionDetails>
					<WhereToWatchFilter
						countriesData={countriesData}
						setCountriesCount={setCountriesCount}
						ottProviders={ottProviders}
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion
				title={"Filters"}
				expanded={filterTabExpand}
				onChange={() => setFilterTabExpand(!filterTabExpand)}
			>
				<FilterTab
					countriesData={countriesData}
					selectedCountry={selectedCountry}
				/>
			</Accordion>
		</div>
	);
};

export default AllFiltersComponent;
