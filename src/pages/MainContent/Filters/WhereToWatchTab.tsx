import {
	useEffect,
	useMemo,
	useRef,
	useState,
	type Dispatch,
	type FunctionComponent,
	type SetStateAction,
} from "react";
import TextField from "../../../components/TextField";
import type {
	CountriesType,
	DiscoverFiltersType,
	OTTProviderResponseType,
} from "../../../types/filters";
import { useGlobalState } from "../../../store/store";
import {
	COUNTRY_OPTIONS,
	MENU_PAPER_PROPS,
	SELECT_STYLES,
} from "../../../constants/filterConstants";
import Typography from "../../../components/Typography";
import {
	Box,
	InputAdornment,
	ListSubheader,
	MenuItem,
	Select,
} from "@mui/material";
import styles from "./AllFiltersComponent.module.scss";
import type { Action } from "../../../types/common";
import { Search } from "@mui/icons-material";
import CustomTooltip from "../../../components/Tooltip";

const WhereToWatchFilter: FunctionComponent<{
	countriesData: Array<CountriesType>;
	setCountriesCount: Dispatch<SetStateAction<number>>;
	ottProviders: Array<OTTProviderResponseType>;
}> = ({ countriesData, setCountriesCount, ottProviders }) => {
	const [hoverOn, setHoverOn] = useState<number | null>(null);

	const { state, dispatch } = useGlobalState();
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
			<CountryFilter dispatch={dispatch} filters={filters} />
			<Box
				display={"flex"}
				my={"14px"}
				flexWrap={"wrap"}
				columnGap={"6px"}
				rowGap={"10px"}
			>
				{ottProviders.map((provider) => {
					const currentSelected = filters?.with_watch_providers
						? filters.with_watch_providers.split("|")
						: [];
					const isSelected = currentSelected.includes(
						String(provider.provider_id),
					);
					const isHovered = hoverOn === provider.provider_id;
					const showOverlay = isSelected || isHovered;

					return (
						<CustomTooltip
							key={provider.provider_id}
							title={provider.provider_name}
						>
							<div
								className={styles.providerContainer}
								onMouseEnter={() => setHoverOn(provider.provider_id)}
								onMouseLeave={() => setHoverOn(null)}
								onClick={() => {
									const currentState =
										filters?.with_watch_providers?.split("|");

									if (currentState?.includes(String(provider.provider_id))) {
										currentSelected.splice(
											currentSelected.indexOf(String(provider.provider_id)),
											1,
										);
									} else {
										currentSelected.push(String(provider.provider_id));
									}
									dispatch({
										type: "SET_FILTERS",
										payload: {
											...filters,
											with_watch_providers: currentSelected.join("|"),
										},
									});
								}}
							>
								<img
									src={`https://media.themoviedb.org/t/p/original${provider.logo_path}`}
									alt={provider.provider_name}
									className={styles.providerLogo}
									loading='lazy'
								/>
								<div
									className={
										showOverlay
											? styles.providerHover
											: styles.hideProviderHover
									}
								>
									<span className={styles.providerHoverImage}></span>
								</div>
							</div>
						</CustomTooltip>
					);
				})}
			</Box>
		</>
	);
};

export default WhereToWatchFilter;

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
			COUNTRY_OPTIONS.find((o) => o.iso_3166_1 === filters.watch_region) ||
			COUNTRY_OPTIONS[0],
		[filters.watch_region],
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
			sx={SELECT_STYLES}
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
										watch_region: option.iso_3166_1,
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
