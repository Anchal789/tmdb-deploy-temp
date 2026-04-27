import {
	useEffect,
	useRef,
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
	LANGUAGES_OPTIONS,
} from "../../../constants/filterConstants";
import Autocomplete from "../../../components/AutoComplete";
import type {
	CountriesType,
	GenreType,
	TvNetworksType,
} from "../../../types/filters";
import TextField from "../../../components/TextField";
import DatePicker from "../../../components/Datepicker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useData } from "../../../lib/useData";
import Slider from "../../../components/Slider";
import RadioButton from "../../../components/RadioButton";

const FilterTab: FunctionComponent<{
	countriesData: Array<CountriesType>;
	selectedCountry?: CountriesType;
}> = ({ countriesData, selectedCountry }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [languageOpen, setLanguageOpen] = useState<boolean>(false);
	const [tvNetworksSearchValue, setTvNetworkSearchValue] = useState<string>("");
	const [tvNetworksDebouncedSearchValue, setTvNetworksDebouncedSearchValue] =
		useState<string>("");
	const [selectedNetworks, setSelectedNetworks] = useState<
		Array<TvNetworksType>
	>([]);
	const hasCrossedThreshold = useRef<boolean>(false);
	const [keyWordsSearchValue, setKeyWordsSearchValue] = useState<string>("");
	const [keyWordsDebouncedSearchValue, setKeyWordsDebouncedSearchValue] =
		useState<string>("");
	const [selectedKeyWords, setSelectedKeyWords] = useState<
		Array<{ id: number; name: string }>
	>([]);
	const hasCrossedThresholdForKeyWords = useRef<boolean>(false);

	const { state, dispatch } = useFilters();
	const { filters } = state;

	const pageURl = useLocation().pathname;

	const { data: genres } = useData<{ genres: Array<GenreType> }>({
		queryKey: ["genres", pageURl],
		url: `/genre/${pageURl.includes("movie") ? "movie" : "tv"}/list`,
		params: { language: "en-US" },
	});

	const { data: tvNetworks } = useData<{
		page: number;
		results: Array<TvNetworksType>;
	}>({
		queryKey: ["tvNetworks", tvNetworksDebouncedSearchValue],
		url: `/search/tv`,
		params: {
			query: tvNetworksDebouncedSearchValue,
			skip: 0,
			page: 1,
			pageSize: 50,
			language: "en-US",
		},
		options: {
			enabled: tvNetworksDebouncedSearchValue.length > 0,
			placeholderData: (prev) => prev,
		},
	});

	const { data: keywordsData } = useData<{
		page: number;
		results: Array<{
			id: number;
			name: string;
		}>;
	}>({
		queryKey: ["keywords", keyWordsDebouncedSearchValue],
		url: `/search/keyword`,
		params: { language: "en-US", query: keyWordsDebouncedSearchValue },
	});

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

	useEffect(() => {
		const timerId = setTimeout(() => {
			const currentLength = tvNetworksSearchValue.trim().length;
			if (currentLength === 0) {
				hasCrossedThreshold.current = false;
				setTvNetworksDebouncedSearchValue("");
				return;
			}

			if (currentLength >= 3) {
				hasCrossedThreshold.current = true;
			}
			if (hasCrossedThreshold.current) {
				setTvNetworksDebouncedSearchValue(tvNetworksSearchValue.trim());
			}
		}, 500);

		return () => clearTimeout(timerId);
	}, [tvNetworksSearchValue]);
	
	useEffect(() => {
		const timerId = setTimeout(() => {
			const currentLength = keyWordsSearchValue.trim().length;
			if (currentLength === 0) {
				hasCrossedThresholdForKeyWords.current = false;
				setKeyWordsDebouncedSearchValue("");
				return;
			}

			if (currentLength >= 3) {
				hasCrossedThresholdForKeyWords.current = true;
			}
			if (hasCrossedThresholdForKeyWords.current) {
				setKeyWordsDebouncedSearchValue(keyWordsSearchValue.trim());
			}
		}, 500);

		return () => clearTimeout(timerId);
	}, [keyWordsSearchValue]);

	const selectedOriginalLanguage = LANGUAGES_OPTIONS.find(
		(item) => item.iso_639_1 === filters.with_original_language,
	);

	const handleUserScoreChange = (
		_event: Event,
		newValue: number[],
		activeThumb: number,
	) => {
		if (activeThumb === 0) {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"vote_average.gte": newValue[0],
				},
			});
		} else {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"vote_average.lte": newValue[1],
				},
			});
		}
	};

	const handleMinimumUserScoreChange = (
		_event: Event,
		newValue: number,
		activeThumb: number,
	) => {
		if (activeThumb === 0) {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"vote_count.gte": newValue,
				},
			});
		}
	};

	const handleRuntimeChange = (
		_event: Event,
		newValue: number[],
		activeThumb: number,
	) => {
		if (activeThumb === 0) {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"with_runtime.gte": newValue[0],
				},
			});
		} else {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"with_runtime.lte": newValue[1],
				},
			});
		}
	};

	const generateMarks = (
		min: number,
		max: number,
		step: number,
		labeledValues: number[],
	) => {
		const marks = [];
		for (let i = min; i <= max; i += step) {
			marks.push({
				value: i,
				label: labeledValues.includes(i) ? i.toString() : "",
			});
		}

		if (marks[marks.length - 1].value !== max) {
			marks.push({
				value: max,
				label: labeledValues.includes(max) ? max.toString() : "",
			});
		}

		return marks;
	};

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
						multiple
						filterSelectedOptions
						inputValue={tvNetworksSearchValue}
						options={tvNetworks?.results || []}
						getOptionLabel={(option) => option.name || option.original_name}
						isOptionEqualToValue={(option, value) => option.id === value.id}
						value={selectedNetworks}
						onChange={(_event, newValue) => {
							setSelectedNetworks(newValue);
							const newIdsString =
								newValue.length > 0
									? newValue.map((network) => network.id).join("|")
									: null;
							dispatch({
								type: "SET_FILTERS",
								payload: {
									...filters,
									with_networks: newIdsString,
								},
							});
						}}
						renderInput={(params) => (
							<TextField {...params} placeholder='Filter by TV networks...' />
						)}
						onInputChange={(_event, value, reason) => {
							if (reason === "input" || reason === "clear") {
								setTvNetworkSearchValue(value);
							} else if (reason === "reset") {
								setTvNetworkSearchValue("");
							}
						}}
						fullWidth
					/>
				</AccordionDetails>
			)}
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Language</Typography>
				<Select
					open={languageOpen}
					onClose={() => setLanguageOpen(false)}
					onOpen={() => setLanguageOpen(true)}
					fullWidth
					MenuProps={{
						autoFocus: false,
						PaperProps: {
							sx: { maxHeight: 300 },
						},
					}}
					value={selectedOriginalLanguage?.native_name}
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
						selectedOriginalLanguage ? (
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1,
								}}
							>
								<Typography sx={{ fontSize: "0.9rem" }}>
									<Typography>
										{selectedOriginalLanguage?.native_name}{" "}
										{selectedOriginalLanguage.count &&
											`(${selectedOriginalLanguage.count})`}
									</Typography>
								</Typography>
							</Box>
						) : (
							<span style={{ color: "#aaa" }}>None Selected</span>
						)
					}
				>
					<Autocomplete
						options={LANGUAGES_OPTIONS.map((option) => option.native_name)}
						renderInput={() => <TextField />}
						onChange={(_event, value) => {
							dispatch({
								type: "SET_FILTERS",
								payload: {
									...filters,
									with_original_language:
										LANGUAGES_OPTIONS.find(
											(option) => option.native_name === value,
										)?.iso_639_1 || null,
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
							const language = LANGUAGES_OPTIONS.find(
								(country) => country.native_name === option,
							);
							const languageCount =
								LANGUAGES_OPTIONS.find(
									(item) => item.iso_639_1 === language?.iso_639_1,
								)?.count || null;
							return (
								<Box
									key={key}
									component='li'
									sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
									{...optionProps}
								>
									<Typography>
										{option} {languageCount && `(${languageCount})`}
									</Typography>
								</Box>
							);
						}}
					/>
				</Select>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>User Score</Typography>
				<Slider
					getAriaLabel={() => "User Score"}
					value={[
						filters["vote_average.gte"] !== null
							? Number(filters["vote_average.gte"])
							: 0,
						filters["vote_average.lte"] !== null
							? Number(filters["vote_average.lte"])
							: 10,
					]}
					max={10}
					onChange={handleUserScoreChange}
					tallMarks={[0, 5, 10]}
					marks={Array.from({ length: 11 }, (_, index) => ({
						value: index,
						label: index % 5 === 0 ? index.toString() : "",
					}))}
				/>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Minimum User Votes</Typography>
				<Slider
					getAriaLabel={() => "Minimum User Votes"}
					value={
						filters["vote_count.gte"] !== null
							? Number(filters["vote_count.gte"])
							: 0
					}
					max={500}
					onChange={handleMinimumUserScoreChange}
					tallMarks={[0, 100, 200, 300, 400, 500]}
					marks={generateMarks(0, 500, 50, [0, 100, 200, 300, 400, 500])}
					step={50}
				/>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Runtime</Typography>
				<Slider
					getAriaLabel={() => "Runtime"}
					value={[
						filters["with_runtime.gte"] !== null
							? Number(filters["with_runtime.gte"])
							: 0,
						filters["with_runtime.lte"] !== null
							? Number(filters["with_runtime.lte"])
							: 400,
					]}
					max={400}
					onChange={handleRuntimeChange}
					tallMarks={[0, 120, 240, 360]}
					marks={generateMarks(0, 400, 15, [0, 120, 240, 360])}
					step={15}
					valueLabelFormat={() =>
						`${filters["with_runtime.gte"]} minutes - ${filters["with_runtime.lte"]} minutes`
					}
				/>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<Typography fontWeight={300}>Keywords</Typography>
				<Autocomplete
					multiple
					filterSelectedOptions
					inputValue={keyWordsSearchValue}
					options={keywordsData?.results || []}
					getOptionLabel={(option) => option.name || option.name}
					isOptionEqualToValue={(option, value) => option.id === value.id}
					value={selectedKeyWords}
					onChange={(_event, newValue) => {
						setSelectedKeyWords(newValue);
						const newIdsString =
							newValue.length > 0
								? newValue.map((network) => network.id).join("|")
								: null;
						dispatch({
							type: "SET_FILTERS",
							payload: {
								...filters,
								with_keywords: newIdsString,
							},
						});
					}}
					renderInput={(params) => (
						<TextField {...params} placeholder='Filter by TV networks...' />
					)}
					onInputChange={(_event, value, reason) => {
						if (reason === "input" || reason === "clear") {
							setKeyWordsSearchValue(value);
						} else if (reason === "reset") {
							setKeyWordsSearchValue("");
						}
					}}
					fullWidth
					placeholder='Filter by keywords...'
				/>
			</AccordionDetails>
		</>
	);
};

export default FilterTab;
