import {
	useEffect,
	useState,
	type Dispatch,
	type FunctionComponent,
	type SetStateAction,
} from "react";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextField";
import type {
	CountriesType,
	OTTProviderResponseType,
} from "../../../types/filters";
import { useFilters } from "../../../store/store";
import { COUNTRY_OPTIONS } from "../../../constants/filterConstants";
import Typography from "../../../components/Typography";
import { Box, Select } from "@mui/material";
import styles from "./AllFiltersComponent.module.scss";
import Tooltip from "../../../components/Tooltip";

const WhereToWatchFilter: FunctionComponent<{
	countriesData: Array<CountriesType>;
	setCountriesCount: Dispatch<SetStateAction<number>>;
	ottProviders: Array<OTTProviderResponseType>;
	selectedCountry?: CountriesType;
}> = ({ countriesData, setCountriesCount, ottProviders, selectedCountry }) => {
	const [open, setOpen] = useState<boolean>(false);
	const { state, dispatch } = useFilters();
	const { filters } = state;

	useEffect(() => {
		setCountriesCount(countriesData.length);
	}, [countriesData, setCountriesCount]);
	return (
		<>
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
				Country
			</Typography>
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
					borderRadius: "0.375rem",
					cursor: "pointer",
					"& .MuiSelect-outlined": {
						padding: 0,
					},
					"&:hover": {
						background: "#f8f9fa",
						outlineColor: "#01b3e460",
						transition: "all 0.2s ease-in-out",
						borderRadius: "0.375rem",
					},
					"&:focus-visible .MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
						{
							borderColor: "#f8f9fa",
							zIndex: 1,
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
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "#D3D3D4 !important",
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
			<Box
				display={"grid"}
				my={"14px"}
				gridTemplateColumns={"repeat(4, 1fr)"}
				columnGap={"6px"}
				rowGap={"10px"}
			>
				{ottProviders.map((provider) => (
					<Tooltip key={provider.provider_id} title={provider.provider_name}>
						<img
							src={`https://media.themoviedb.org/t/p/original${provider.logo_path}`}
							alt={provider.provider_name}
							className={styles.providerLogo}
							loading='lazy'
							onClick={() => {
								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_watch_providers: filters?.with_watch_providers
											? filters?.with_watch_providers +
												`|${provider.provider_id}`
											: String(provider.provider_id),
									},
								});
							}}
						/>
					</Tooltip>
				))}
			</Box>
		</>
	);
};

export default WhereToWatchFilter;
