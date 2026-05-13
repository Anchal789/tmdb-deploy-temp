import Checkbox from "../../../../components/Checkbox";
import FormControlLabel from "../../../../components/FormControlLabel";
import {
	Box,
	InputAdornment,
	ListSubheader,
	MenuItem,
	Select,
} from "@mui/material";
import Typography from "../../../../components/Typography";
import TextField from "../../../../components/TextField";
import DatePicker from "../../../../components/Datepicker";
import {
	useMemo,
	useRef,
	useState,
	type Dispatch,
	type FunctionComponent,
} from "react";
import type {
	CountriesType,
	DiscoverFiltersType,
} from "../../../../types/filters";
import type { Action } from "../../../../types/common";
import dayjs, { Dayjs } from "dayjs";
import {
	COUNTRY_OPTIONS,
	MENU_PAPER_PROPS,
	SELECT_STYLES,
} from "../../../../constants/filterConstants";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import { Search } from "@mui/icons-material";

const ReleaseDateFilter: FunctionComponent<{
	countriesData: Array<CountriesType>;
	selectedCountry?: CountriesType;
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
	pageURl: string;
}> = ({ dispatch, filters, pageURl }) => {
	const fromDate = filters["release_date.gte"]
		? dayjs(filters["release_date.gte"])
		: null;
	const toDate = filters["release_date.lte"]
		? dayjs(filters["release_date.lte"])
		: null;

	const hasDateError =
		(fromDate && toDate && fromDate.isAfter(toDate)) || false;

	return (
		<AccordionDetails
			sx={{
				borderBottom: "1px solid #e5e7eb",
				borderRadius: "8px 8px 0 0",
			}}
		>
			<FilterSectionTitle title='Release Dates' />
			<FormControlLabel
				sx={{
					height: "24px",
				}}
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

			{(filters.with_release_type ||
				pageURl === "/movie/upcoming" ||
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
					sx={{
						marginTop: "6px !important",
						marginBottom: "20px !important",
					}}
				/>
			)}

			{filters.with_release_type && filters.region && (
				<CountryFilter dispatch={dispatch} filters={filters} />
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
											? ((filters.with_release_type as string) || "").split("|")
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

			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				mt={"11px"}
				mb={"8px"}
			>
				<Typography
					sx={{ width: "100px", color: "#a4a4a4", fontSize: "0.9rem" }}
				>
					from
				</Typography>
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
					helperText={hasDateError ? "Start date must be before end date" : ""}
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
				<Typography
					sx={{ width: "100px", color: "#a4a4a4", fontSize: "0.9rem" }}
				>
					to
				</Typography>
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
					helperText={hasDateError ? "End date must be after start date" : ""}
					textFieldProps={{
						variant: "outlined",
					}}
				/>
			</Box>
		</AccordionDetails>
	);
};

export default ReleaseDateFilter;

const CountryFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
	selectedCountry?: CountriesType;
}> = ({ dispatch, filters }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const searchFieldRef = useRef<HTMLInputElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const activeSelection = useMemo(
		() =>
			COUNTRY_OPTIONS.find((o) => o.iso_3166_1 === filters.region) ||
			COUNTRY_OPTIONS[0],
		[filters.region],
	);

	const filteredOptions = useMemo(() => {
		const cleanSearch = searchTerm.toLowerCase().trim();
		if (!cleanSearch) return COUNTRY_OPTIONS;
		return COUNTRY_OPTIONS.filter(
			(opt) =>
				opt?.native_name?.toLowerCase().includes(cleanSearch) ||
				opt.english_name?.toLowerCase().includes(cleanSearch),
		);
	}, [searchTerm]);

	const handleMenuOpened = () => {
		searchFieldRef.current?.focus();

		if (scrollContainerRef.current) {
			const selectedItem =
				scrollContainerRef.current.querySelector(".Mui-selected");
			if (selectedItem) {
				selectedItem.scrollIntoView({ block: "nearest" });
			}
		}
	};

	const renderOptionLabel = (
		option: (typeof COUNTRY_OPTIONS)[0],
		selectedValue?: boolean,
	) => (
		<Box
			sx={{
				color: "getContrastText()",
				fontSize: "0.875rem",
				display: "flex",
				alignItems: "center",
				gap: 1,
				...(selectedValue && {
					overflow: "hidden",
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
				}),
				...(!selectedValue && {
					wordBreak: "break-word",
					whiteSpace: "normal",
					lineHeight: "1.4",
				}),
			}}
		>
			<CountryFlag
				flagUrl={option.flagUrl || ""}
				countryName={option.native_name || ""}
				size={selectedValue ? 24 : 20}
			/>
			<Typography sx={{ fontSize: "0.9rem", color: "getContrastText()" }}>
				{option.native_name}
			</Typography>
		</Box>
	);

	return (
		<Select
			fullWidth
			displayEmpty
			onOpen={() => {
				setSearchTerm("");
				setIsOpen(true);
			}}
			open={isOpen}
			onClose={() => setIsOpen(false)}
			renderValue={() => renderOptionLabel(activeSelection, true)}
			MenuProps={{
				autoFocus: false,
				PaperProps: MENU_PAPER_PROPS,
				TransitionProps: { onEntered: handleMenuOpened },
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
				marginBottom: "10px",
			}}
		>
			<ListSubheader
				sx={{
					p: "0.75rem",
					backgroundColor: "white",
					zIndex: 10,
					position: "sticky",
					top: 0,
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<TextField
					size='small'
					fullWidth
					inputRef={searchFieldRef}
					placeholder='Filter'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Search fontSize='small' />
							</InputAdornment>
						),
					}}
					sx={{
						"& .MuiSelect-select": {
							padding: "8.5px 14px",

							fontSize: "14px",
						},

						"& .MuiOutlinedInput-root": {
							borderRadius: "0.375rem",

							fontSize: "14px",
						},

						"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
							{
								borderColor: "#01b3e460 !important",
							},

						"& .MuiAutocomplete-input": {
							cursor: "pointer",
						},

						"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
							minHeight: "38px",
						},

						"& .MuiOutlinedInput-notchedOutline": {
							border: "0.8px solid #01b3e460 !important",

							borderRadius: "0.375rem",
						},
					}}
				/>
			</ListSubheader>

			<Box
				ref={scrollContainerRef}
				sx={{
					overflowY: "auto",
					overflowX: "hidden",
					flex: 1,
				}}
			>
				{filteredOptions.length > 0 ? (
					filteredOptions.map((option) => (
						<MenuItem
							key={option.iso_3166_1 || "none"}
							value={option.iso_3166_1 || ""}
							selected={option.iso_3166_1 === activeSelection.iso_3166_1}
							onClick={() => {
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										region: option.iso_3166_1,
									},
								});
							}}
							sx={{
								py: 1,
								"&.Mui-selected": {
									backgroundColor: "#01b3e4 !important",
									color: "#fff",
									"&:hover": { backgroundColor: "#032541 !important" },
								},
							}}
						>
							{renderOptionLabel(option, false)}
						</MenuItem>
					))
				) : (
					<MenuItem disabled sx={{ justifyContent: "center", py: 4 }}>
						No Data Found.
					</MenuItem>
				)}
			</Box>
		</Select>
	);
};

const CountryFlag: FunctionComponent<{
	flagUrl: string;
	countryName: string;
	size: number;
}> = ({ flagUrl, countryName, size }) => {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return (
			<Box
				sx={{
					color: "#888",
					width: size,
					height: size,
				}}
			/>
		);
	}

	return (
		<img
			loading='lazy'
			width={size}
			srcSet={`https://www.themoviedb.org${flagUrl}`}
			src={`https://www.themoviedb.org${flagUrl}`}
			alt={`${countryName} flag`}
			onError={() => setHasError(true)}
		/>
	);
};
