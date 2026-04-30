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
import { LANGUAGES_OPTIONS } from "../../../../constants/filterConstants";
import Typography from "../../../../components/Typography";
import TextField from "../../../../components/TextField";
import { Search } from "@mui/icons-material";

const MENU_PAPER_PROPS = {
	sx: {
		marginTop: "0.25rem",
		width: "226.4px",
		height: "217.6px",
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
		"& .MuiList-root": {
			paddingTop: 0,
			paddingBottom: 0,
			display: "flex",
			flexDirection: "column",
			height: "100%",
		},
		border: ".8px solid #21252933",
		borderRadius: "0.375rem",
		boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.125)",
	},
};

const SELECT_STYLES = {
	borderRadius: "0.375rem",
	"& .MuiSelect-select": {
		padding: "8.5px 14px",
		fontSize: "14px",
	},
	"& .MuiOutlinedInput-root": {
		borderRadius: "0.375rem",
		fontSize: "14px",
	},
	"&:hover": {
		backgroundColor: "#F8F9FA",
		borderRadius: "0.375rem",
	},
	"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
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
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		borderColor: "#01b3e460 !important",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderWidth: "1px !important",
	},
};

const LanguageFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const searchFieldRef = useRef<HTMLInputElement>(null);
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
		<Select
			fullWidth
			displayEmpty
			value={activeSelection.iso_639_1 || ""}
			onOpen={() => setSearchTerm("")}
			renderValue={() => renderOptionLabel(activeSelection, true)}
			MenuProps={{
				autoFocus: false,
				PaperProps: MENU_PAPER_PROPS,
				TransitionProps: { onEntered: handleMenuOpened },
			}}
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
	);
};

export default LanguageFilter;
