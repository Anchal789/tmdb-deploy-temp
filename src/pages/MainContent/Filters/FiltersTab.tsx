import {
	useEffect,
	useState,
	type ChangeEvent,
	type FunctionComponent,
} from "react";
import AccordionDetails from "../../../components/AccordionDetails";
import Typography from "../../../components/Typography";
import {
	Box,
	Chip,
	FormControlLabel,
	Radio,
	RadioGroup,
	Select,
} from "@mui/material";
import Checkbox from "../../../components/Checkbox";
import { useFilters } from "../../../store/store";
import styles from "./AllFiltersComponent.module.scss";
import { useLocation } from "react-router";
import {
	COUNTRY_OPTIONS,
	FILTERS_INITIAL_STATE,
} from "../../../constants/filterConstants";
import Autocomplete from "../../../components/AutoComplete";
import type {
	CountriesType,
	GenreType,
	TVNetworksResponseType,
} from "../../../types/filters";
import TextField from "../../../components/TextFielld";
import DatePicker from "../../../components/Datepicker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useData } from "../../../lib/useData";

const FilterTab: FunctionComponent<{
	countriesData: Array<CountriesType>;
	selectedCountry?: CountriesType;
}> = ({ countriesData, selectedCountry }) => {
	const [open, setOpen] = useState<boolean>(false);

	const { state, dispatch } = useFilters();
	const { filters } = state;

	const pageURl = useLocation().pathname;

	const { data: genres } = useData<{ genres: Array<GenreType> }>({
		queryKey: ["genres", pageURl],
		url: `/genre/${pageURl.includes("movie") ? "movie" : "tv"}/list`,
		params: { language: "en-US" },
	});

	// const { data: tvNetworks } = useData<TVNetworksResponseType>({
	// 	queryKey: ["tvNetworks", pageURl],
	// 	url: `https://www.themoviedb.org/search/remote/tv_network`,
	// 	params: {
	// 		take: 50,
	// 		skip: 0,
	// 		page: 1,
	// 		pageSize: 50,
	// 		"filter[filters][0][value]": "ss",
	// 		"filter[filters][0][field]": "name",
	// 		"filter[filters][0][operator]": "startswith",
	// 		"filter[filters][0][ignoreCase]": true,
	// 		"filter[logic]": "and",
	// 	},
    // });
    
    // console.log(tvNetworks)

	const handleCheckboxesChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;

		const currentTypes = filters.with_watch_monetization_types
			? filters.with_watch_monetization_types.split("|")
			: [];

		let newTypes: string[];

		if (checked) {
			newTypes = [...currentTypes, name];
		} else {
			newTypes = currentTypes.filter((type) => type !== name);
		}

		dispatch({
			type: "SET_FILTERS",
			payload: {
				...filters,
				with_watch_monetization_types: newTypes.join("|"),
			},
		});
	};

	const fromDate = filters["release_date.gte"]
		? dayjs(filters["release_date.gte"])
		: null;
	const toDate = filters["release_date.lte"]
		? dayjs(filters["release_date.lte"])
		: null;

	const hasDateError =
		(fromDate && toDate && fromDate.isAfter(toDate)) || false;

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
				<Typography fontWeight={300}>Show Me</Typography>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='everything'
					name='radio-buttons-group'
				>
					<FormControlLabel
						value='everything'
						control={<Radio />}
						label='Everything'
						sx={{
							cursor: "pointer",
						}}
					/>
					<FormControlLabel
						value='moviesIHaveNotSeen'
						control={<Radio />}
						label="Movies I Haven't Seen"
						disabled
						sx={{ cursor: "pointer" }}
					/>
					<FormControlLabel
						value='moviesIHaveSeen'
						control={<Radio />}
						label='Movies I Have Seen'
						disabled
						sx={{ cursor: "pointer" }}
					/>
				</RadioGroup>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Availabilities</Typography>
				<FormControlLabel
					value='show_me'
					control={
						<Checkbox
							checked={filters.with_watch_monetization_types === null}
							onChange={(event) => {
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_watch_monetization_types: event.target.checked
											? null
											: "flatrate|free|ads|rent|buy",
									},
								});
							}}
						/>
					}
					label='Search all availabilities?'
				/>
				{filters.with_watch_monetization_types && (
					<div className={styles.availabilitiesCheckboxesContainer}>
						<FormControlLabel
							value='flatrate'
							control={
								<Checkbox
									name='flatrate'
									checked={filters.with_watch_monetization_types.includes(
										"flatrate",
									)}
									onChange={handleCheckboxesChange}
								/>
							}
							label='Stream'
						/>
						<FormControlLabel
							value='free'
							control={
								<Checkbox
									name='free'
									checked={filters.with_watch_monetization_types.includes(
										"free",
									)}
									onChange={handleCheckboxesChange}
								/>
							}
							label='Free'
						/>
						<FormControlLabel
							value='ads'
							control={
								<Checkbox
									name='ads'
									checked={filters.with_watch_monetization_types.includes(
										"ads",
									)}
									onChange={handleCheckboxesChange}
								/>
							}
							label='Ads'
						/>
						<FormControlLabel
							value='rent'
							control={
								<Checkbox
									name='rent'
									checked={filters.with_watch_monetization_types.includes(
										"rent",
									)}
									onChange={handleCheckboxesChange}
								/>
							}
							label='Rent'
						/>
						<FormControlLabel
							value='buy'
							control={
								<Checkbox
									name='buy'
									checked={filters.with_watch_monetization_types.includes(
										"buy",
									)}
									onChange={handleCheckboxesChange}
								/>
							}
							label='Buy'
						/>
					</div>
				)}
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Release Dates</Typography>
				<FormControlLabel
					control={
						<Checkbox
							name='with_release_type'
							checked={filters.with_release_type === null}
							onChange={(event) => {
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_release_type: event.target.checked
											? null
											: "2|3|1|4|5|6",
									},
								});
							}}
						/>
					}
					label='Search all releases?'
				/>

				{(pageURl === "/movie/upcoming" ||
					pageURl === "/movie/now-playing") && (
					<FormControlLabel
						control={
							<Checkbox
								name='region'
								checked={filters.region === null}
								onChange={(event) => {
									dispatch({
										type: "SET_FILTERS",
										payload: {
											...filters,
											region: event.target.checked ? null : "IN",
										},
									});
								}}
							/>
						}
						label='Search all countries?'
					/>
				)}

				{filters.region && (
					<Select
						open={open}
						onClose={() => setOpen(false)}
						onOpen={() => setOpen(true)}
						fullWidth
						MenuProps={{
							autoFocus: false,
							PaperProps: {
								sx: { maxHeight: 300 },
							},
						}}
						value={selectedCountry?.native_name}
						sx={{
							padding: ".375rem .75rem",
							cursor: "pointer",
							"& .MuiSelect-outlined": {
								padding: 0,
							},
							"&:hover": {
								background: "#f8f9fa",
								outlineColor: "#01b3e460",
								transition: "all 0.2s ease-in-out",
							},
							"&:focus-visible .MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
								{
									borderColor: "#f8f9fa",
									zIndex: 1,
								},
						}}
						renderValue={() =>
							selectedCountry ? (
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 1,
									}}
								>
									<img
										src={`https://www.themoviedb.org${selectedCountry.flagUrl}`}
										alt={selectedCountry.native_name}
										width={24}
									/>
									<Typography sx={{ fontSize: "0.9rem" }}>
										{selectedCountry.native_name}
									</Typography>
								</Box>
							) : (
								<span style={{ color: "#aaa" }}>Select Country</span>
							)
						}
					>
						<Autocomplete
							options={countriesData.map((option) => option.native_name)}
							renderInput={() => <TextField />}
							onChange={(_event, value) => {
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										watch_region:
											countriesData.find(
												(option) => option.native_name === value,
											)?.iso_3166_1 || "",
									},
								});
							}}
							fullWidth
							sx={{
								".MuiAutocomplete-listbox": {
									padding: "0 !important",
								},
							}}
							renderOption={(props, option) => {
								const { key, ...optionProps } = props;
								const country = countriesData.find(
									(country) => country.native_name === option,
								);
								const flagUrl = COUNTRY_OPTIONS.find(
									(item) => item.iso_3166_1 === country?.iso_3166_1,
								)?.flagUrl;
								return (
									<Box
										key={key}
										component='li'
										sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
										{...optionProps}
									>
										<img
											loading='lazy'
											width='20'
											srcSet={`https://www.themoviedb.org${flagUrl}`}
											src={`https://www.themoviedb.org${flagUrl}`}
											alt=''
										/>
										<Typography>{option}</Typography>
									</Box>
								);
							}}
						/>
					</Select>
				)}

				{filters.with_release_type && (
					<Box display={"flex"} flexDirection={"column"}>
						{[
							{ id: 2, label: "Theatrical (limited)" },
							{ id: 3, label: "Theatrical" },
							{ id: 1, label: "Premiere" },
							{ id: 4, label: "Digital" },
							{ id: 5, label: "Physical" },
							{ id: 6, label: "TV" },
						].map((index) => (
							<FormControlLabel
								key={index.id}
								control={
									<Checkbox
										name='with_release_type'
										checked={(
											(filters.with_release_type as string) || ""
										).includes(`${index.id}`)}
										onChange={(event) => {
											const currentTypes = filters.with_release_type
												? ((filters.with_release_type as string) || "").split(
														"|",
													)
												: [];

											let newTypes: string[];

											if (event.target.checked) {
												newTypes = [...currentTypes, index.id.toString()];
											} else {
												newTypes = currentTypes.filter(
													(type) => type !== index.id.toString(),
												);
											}

											dispatch({
												type: "SET_FILTERS",
												payload: {
													...filters,
													with_release_type: newTypes.join("|"),
												},
											});
										}}
									/>
								}
								label={index.label}
							/>
						))}
					</Box>
				)}

				<div>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						mb={"8px"}
					>
						<Typography sx={{ width: "50%" }}>from</Typography>
						<DatePicker
							value={fromDate}
							maxDate={toDate || undefined}
							onChange={(newValue: Dayjs | null) => {
								const formattedDate = newValue
									? newValue.format("YYYY-MM-DD")
									: null;
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										"release_date.gte": formattedDate,
									},
								});
							}}
							format='MM/DD/YYYY'
							placeholder='Select start date'
							error={hasDateError}
							helperText={
								hasDateError ? "Start date must be before end date" : ""
							}
							textFieldProps={{
								variant: "outlined",
							}}
						/>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Typography sx={{ width: "50%" }}>to</Typography>
						<DatePicker
							value={toDate}
							minDate={fromDate || undefined}
							onChange={(newValue: Dayjs | null) => {
								const formattedDate = newValue
									? newValue.format("YYYY-MM-DD")
									: null;
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										"release_date.lte": formattedDate,
									},
								});
							}}
							format='MM/DD/YYYY'
							placeholder='Select end date'
							error={hasDateError}
							helperText={
								hasDateError ? "End date must be after start date" : ""
							}
							textFieldProps={{
								variant: "outlined",
							}}
						/>
					</Box>
				</div>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Genres</Typography>
				{genres?.genres?.map((genre: GenreType) => {
					const genreIdStr = genre.id.toString();
					const currentGenresStr = filters?.with_genres || "";
					const currentGenresArray = currentGenresStr
						? currentGenresStr.split(",")
						: [];

					const isSelected = currentGenresArray.includes(genreIdStr);

					return (
						<Chip
							key={genre.id}
							label={genre.name}
							variant={isSelected ? "filled" : "outlined"}
							sx={{
								cursor: "pointer",
								backgroundColor: isSelected ? "#01b4e4" : "",
								borderColor: "#9e9e9e",
								color: isSelected ? "white" : "inherit",
								"&:hover": {
									backgroundColor: isSelected ? "#01b4e4" : "#e0e0e0",
								},
							}}
							onClick={() => {
								let newGenresArray: string[];

								if (isSelected) {
									newGenresArray = currentGenresArray.filter(
										(id) => id !== genreIdStr,
									);
								} else {
									newGenresArray = [...currentGenresArray, genreIdStr];
								}

								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_genres:
											newGenresArray.length > 0
												? newGenresArray.join(",")
												: null,
									},
								});
							}}
						/>
					);
				})}
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Certifications</Typography>

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
								color: isSelected ? "white" : "inherit",
								"&:hover": {
									backgroundColor: isSelected ? "#01b4e4" : "#e0e0e0",
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
			</AccordionDetails>
			{pageURl.includes("tv") && (
				<AccordionDetails
					sx={{
						borderBottom: "1px solid #e5e7eb",
						borderRadius: "8px 8px 0 0",
					}}
				>
					<Typography fontWeight={300}>Network</Typography>
					<Autocomplete
						options={countriesData.map((option) => option.native_name)}
						renderInput={() => <TextField />}
						onChange={(_event, value) => {
							dispatch({
								type: "SET_FILTERS",
								payload: {
									...filters,
									watch_region:
										countriesData.find((option) => option.native_name === value)
											?.iso_3166_1 || "",
								},
							});
						}}
						fullWidth
						sx={{
							".MuiAutocomplete-listbox": {
								padding: "0 !important",
							},
						}}
						renderOption={(props, option) => {
							const { key, ...optionProps } = props;
							const country = countriesData.find(
								(country) => country.native_name === option,
							);
							const flagUrl = COUNTRY_OPTIONS.find(
								(item) => item.iso_3166_1 === country?.iso_3166_1,
							)?.flagUrl;
							return (
								<Box
									key={key}
									component='li'
									sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
									{...optionProps}
								>
									<img
										loading='lazy'
										width='20'
										srcSet={`https://www.themoviedb.org${flagUrl}`}
										src={`https://www.themoviedb.org${flagUrl}`}
										alt=''
									/>
									<Typography>{option}</Typography>
								</Box>
							);
						}}
					/>
				</AccordionDetails>
			)}
		</>
	);
};

export default FilterTab;
