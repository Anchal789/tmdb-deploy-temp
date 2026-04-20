import { useState, type FunctionComponent } from "react";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextFielld";
import type { CountriesType, OTTProviderType } from "../../../types/filters";
import { useFilters } from "../../../store/store";
import { COUNTRY_OPTIONS } from "../../../constants/filterConstants";
import { Box, Select } from "@mui/material";
import Typography from "../../../components/Typography";
import { useData } from "../../../lib/useData";
import styles from "./Filters.module.scss";

const WhereToWatchFilter: FunctionComponent<{
	countriesData: Array<CountriesType>;
}> = ({ countriesData }) => {
	const [open, setOpen] = useState<boolean>(false);
	const { state, dispatch } = useFilters();
	const { filters } = state;

	// const filteredCountries = useMemo(() => {
	// 	return countriesData.filter((country) =>
	// 		country.native_name.toLowerCase().includes(search.toLowerCase()),
	// 	);
	// }, [search, countriesData]);

	// const selectedCountry = countriesData.find(
	// 	(c) => c.iso_3166_1 === filters.watch_region,
	// );
	const selectedCountry = COUNTRY_OPTIONS.find(
		(item) => item.iso_3166_1 === filters.watch_region,
	);

	const { data } = useData<OTTProviderType>({
		queryKey: ["ott_providers"],
		url: "/watch/providers/movie",
		params: { language: "en-US", watch_region: selectedCountry?.iso_3166_1 },
	});

	const ottProviders = data?.results || [];
	return (
		<>
			<Typography fontWeight={300}>Country</Typography>
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
							{/* Flag */}
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
					onChange={(_event, value) =>
						dispatch({
							type: "SET_FILTERS",
							payload: {
								...filters,
								watch_region:
									countriesData.find((option) => option.native_name === value)
										?.iso_3166_1 || "",
							},
						})
					}
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
				gap={"6px"}
            >
                {ottProviders.map((provider) => (
                    <Box key={provider.provider_id}>
                        <img
                            src={`https://media.themoviedb.org/t/p/original${provider.logo_path}`}
                            alt={provider.provider_name}
                            className={styles.providerLogo}
                            loading="lazy"
                        />
                    </Box>
                ))}
            </Box>
		</>
	);
};

export default WhereToWatchFilter;
