import { lazy, useEffect, type FunctionComponent } from "react";
import AccordionDetails from "../../../../components/AccordionDetails";
import Typography from "../../../../components/Typography";
import { Box, Chip, RadioGroup } from "@mui/material";
import { useFilters } from "../../../../store/store";
import { useLocation } from "react-router";
import { FILTERS_INITIAL_STATE } from "../../../../constants/filterConstants";
import type { CountriesType } from "../../../../types/filters";
import RadioButton from "../../../../components/RadioButton";
import FormControlLabel from "../../../../components/FormControlLabel";
import QuestionMarkTooltip from "../../../../components/QuestionMarkTooltip";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import CustomTooltip from "../../../../components/Tooltip";

const LanguageFilter = lazy(() => import("./LanguageFilter"));
const AvailabilitiesFilter = lazy(() => import("./AvailabilitiesFilter"));
const ReleaseDateFilter = lazy(() => import("./ReleaseDateFilter"));
const NetworkFilter = lazy(() => import("./NetworkFilter"));
const GenreFilter = lazy(() => import("./GenreFilter"));
const SliderFilters = lazy(() => import("./SliderFilters"));
const KeywordFilter = lazy(() => import("./KeywordFilter"));

const FilterTab: FunctionComponent<{
	countriesData: Array<CountriesType>;
	selectedCountry?: CountriesType;
}> = ({ countriesData, selectedCountry }) => {
	const { state, dispatch } = useFilters();
	const { filters } = state;

	const pageURl = useLocation().pathname;

	useEffect(() => {
		const isTvDefault =
			pageURl === "/tv" ||
			pageURl === "/tv/airing-today" ||
			pageURl === "/tv/on-the-air";

		dispatch({
			type: "INIT_PAGE_FILTERS", // Use the new action!
			payload: {
				...FILTERS_INITIAL_STATE, // Always start fresh on a new page
				with_watch_monetization_types: isTvDefault
					? "flatrate|free|ads|rent|buy"
					: null,
			},
		});

		if (pageURl === "/movie/upcoming" || pageURl === "/movie/now-playing") {
			dispatch({
				type: "INIT_PAGE_FILTERS",
				payload: {
					...filters,
					with_release_type: "3",
				},
			});
		}
	}, [pageURl, dispatch]);

	return (
		<>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography
					fontWeight={300}
					sx={{
						lineHeight: "16px",
						color: "#000",
						display: "inline-flex",
						alignItems: "center",
						marginBottom: "10px",
					}}
				>
					Show Me
					<CustomTooltip title={""}>
						<QuestionMarkTooltip />
					</CustomTooltip>
				</Typography>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='everything'
					name='radio-buttons-group'
				>
					<FormControlLabel
						value='everything'
						control={<RadioButton />}
						label='Everything'
						sx={{
							cursor: "pointer",
						}}
					/>
					<FormControlLabel
						value='moviesIHaveNotSeen'
						control={<RadioButton />}
						label="Movies I Haven't Seen"
						disabled
						sx={{ cursor: "pointer" }}
					/>
					<FormControlLabel
						value='moviesIHaveSeen'
						control={<RadioButton />}
						label='Movies I Have Seen'
						disabled
						sx={{ cursor: "pointer" }}
					/>
				</RadioGroup>
			</AccordionDetails>

			{/* Availabilities Filter */}
			<AvailabilitiesFilter dispatch={dispatch} filters={filters} />

			{/* Release Date Filter */}
			<ReleaseDateFilter
				countriesData={countriesData}
				selectedCountry={selectedCountry}
				dispatch={dispatch}
				filters={filters}
				pageURl={pageURl}
			/>

			{/* Genre Filter */}
			<GenreFilter dispatch={dispatch} filters={filters} pageURl={pageURl} />

			{/* Certification Filter */}
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<FilterSectionTitle title='Certifications' />
				<Box mt={"-8px"}>
					{["U", "UA", "A"]?.map((certification) => {
						const currentCertificationsStr = filters?.certification?.split("|");

						const isSelected = currentCertificationsStr?.find(
							(cert) => cert === certification,
						);

						return (
							<Chip
								key={certification}
								label={certification}
								variant={isSelected ? "filled" : "outlined"}
								sx={{
									cursor: "pointer",
									backgroundColor: isSelected ? "#01b4e4" : "",
									borderColor: "#9e9e9e",
									color: isSelected ? "white" : "#000",
									marginRight: "8px",
									marginTop: "8px",
									fontSize: "0.9rem",
									fontWeight: 400,
									display: "inline-flex",
									borderRadius: "14px",
									"&:hover ": {
										backgroundColor: "#01b4e4 !important",
										textDecoration: "underline",
										color: "#fff",
										borderColor: "#01b4e4",
										textUnderlineOffset: "3px",
									},
								}}
								onClick={() => {
									let newCertificationArray: string[];

									if (isSelected) {
										newCertificationArray =
											currentCertificationsStr?.filter(
												(cert) => cert !== certification,
											) || [];
									} else {
										newCertificationArray = [
											...(currentCertificationsStr || []),
											certification,
										];
									}

									dispatch({
										type: "SET_FILTERS",
										payload: {
											...filters,
											certification:
												newCertificationArray.length > 0
													? newCertificationArray.join("|")
													: null,
										},
									});
								}}
							/>
						);
					})}
				</Box>
			</AccordionDetails>

			{/* Network Filter */}
			{pageURl.includes("tv") && (
				<NetworkFilter dispatch={dispatch} filters={filters} />
			)}

			{/* Language Filter */}
			<LanguageFilter dispatch={dispatch} filters={filters} />

			{/* Slider Filters */}
			<SliderFilters dispatch={dispatch} filters={filters} />

			{/* Keyword Filter */}
			<KeywordFilter dispatch={dispatch} filters={filters} />
		</>
	);
};

export default FilterTab;
