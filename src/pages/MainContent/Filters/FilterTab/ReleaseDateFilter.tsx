import Checkbox from "../../../../components/Checkbox";
import FormControlLabel from "../../../../components/FormControlLabel";
import { Box, Select } from "@mui/material";
import Typography from "../../../../components/Typography";
import Autocomplete from "../../../../components/AutoComplete";
import TextField from "../../../../components/TextField";
import DatePicker from "../../../../components/Datepicker";
import { useState, type Dispatch, type FunctionComponent } from "react";
import type {
	CountriesType,
	DiscoverFiltersType,
} from "../../../../types/filters";
import type { Action } from "../../../../types/common";
import dayjs, { Dayjs } from "dayjs";
import { COUNTRY_OPTIONS } from "../../../../constants/filterConstants";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";

const ReleaseDateFilter: FunctionComponent<{
	countriesData: Array<CountriesType>;
	selectedCountry?: CountriesType;
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
	pageURl: string;
}> = ({ countriesData, selectedCountry, dispatch, filters, pageURl }) => {
	const [open, setOpen] = useState<boolean>(false);

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
						marginBottom: "10px",
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
