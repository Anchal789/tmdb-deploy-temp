import {
	useMemo,
	useRef,
	useState,
	type Dispatch,
	type FunctionComponent,
} from "react";
import type { Action } from "../../../../types/common";
import type { DiscoverFiltersType } from "../../../../types/filters";
import {
	Box,
	InputAdornment,
	ListSubheader,
	MenuItem,
	Select,
} from "@mui/material";
import {
	LANGUAGES_OPTIONS,
	SELECT_STYLES,
	withMenuProps,
} from "../../../../constants/filterConstants";
import Typography from "../../../../components/Typography";
import TextField from "../../../../components/TextField";
import { Search } from "@mui/icons-material";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import CustomTooltip from "../../../../components/Tooltip";
import QuestionMarkTooltip from "../../../../components/QuestionMarkTooltip";

const LanguageFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const searchFieldRef = useRef<HTMLInputElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const activeSelection = useMemo(
		() =>
			LANGUAGES_OPTIONS.find(
				(o) => o.iso_639_1 === filters.with_original_language,
			) || LANGUAGES_OPTIONS[0],
		[filters.with_original_language],
	);

	const filteredOptions = useMemo(() => {
		const cleanSearch = searchTerm.toLowerCase().trim();
		if (!cleanSearch) return LANGUAGES_OPTIONS;
		return LANGUAGES_OPTIONS.filter(
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
		option: (typeof LANGUAGES_OPTIONS)[0],
		selectedValue?: boolean,
	) => (
		<Typography
			variant='body2'
			sx={{
				color: "getContrastText()",
				fontSize: "0.875rem",
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
			{option.native_name}
			{option.count !== null && option.count > 0 && (
				<Box component='span' sx={{ ml: 0.5, opacity: 0.8 }}>
					({option.count.toLocaleString()})
				</Box>
			)}
		</Typography>
	);

	return (
		<AccordionDetails
			sx={{
				borderBottom: "1px solid #e5e7eb",
				borderRadius: "8px 8px 0 0",
			}}
		>
			<Box>
				<FilterSectionTitle title='Language' sx={{ width: "fit-content" }} />
				<CustomTooltip
					title={"Filter items based on their original language."}
					sx={{ display: "flex" }}
				>
					<span>
						<QuestionMarkTooltip />
					</span>
				</CustomTooltip>
			</Box>
			<Select
				fullWidth
				displayEmpty
				open={isOpen}
				onClose={() => setIsOpen(false)}
				value={activeSelection.iso_639_1 || ""}
				onOpen={() => {
					setSearchTerm("");
					setIsOpen(true);
				}}
				renderValue={() => renderOptionLabel(activeSelection, true)}
				MenuProps={{
					autoFocus: false,
					PaperProps: withMenuProps({ width: "226.4px", height: "217.6px" }),
					TransitionProps: { onEntered: handleMenuOpened },
					anchorOrigin: { vertical: "bottom", horizontal: "left" },
					transformOrigin: { vertical: "top", horizontal: "left" },
				}}
				sx={SELECT_STYLES}
				IconComponent={() => (
					<Box
						sx={{
							padding: "0.375rem",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
						}}
						onClick={(e) => {
							e.stopPropagation();
							setIsOpen((prev) => !prev);
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
								key={option.iso_639_1 || "none"}
								value={option.iso_639_1 || ""}
								selected={option.iso_639_1 === activeSelection.iso_639_1}
								onClick={() => {
									dispatch({
										type: "SET_FILTERS",
										payload: {
											...filters,
											with_original_language: option.iso_639_1,
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
		</AccordionDetails>
	);
};

export default LanguageFilter;
