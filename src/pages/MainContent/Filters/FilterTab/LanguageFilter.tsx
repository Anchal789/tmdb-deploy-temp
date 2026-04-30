import {
	useCallback,
	useMemo,
	useRef,
	useState,
	type Dispatch,
	type FunctionComponent,
} from "react";
import type { Action } from "../../../../types/common";
import type { DiscoverFiltersType } from "../../../../types/filters";
import { Box, InputAdornment, ListSubheader, MenuItem, Select } from "@mui/material";
import { LANGUAGES_OPTIONS } from "../../../../constants/filterConstants";
import Typography from "../../../../components/Typography";
import TextField from "../../../../components/TextField";
import { Search } from "@mui/icons-material";

const MENU_PAPER_PROPS = {
	sx: {
		maxHeight: 300,
		width: 280,
		"& .MuiList-root": { paddingTop: 0 },
	},
};

const SELECT_STYLES = {
	"& .MuiSelect-select": { padding: "8.5px 14px" },
	"&:hover": { backgroundColor: "#f8f9fa" },
};

const LanguageFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const searchFieldRef = useRef(null);

	const filteredOptions = useMemo(() => {
		const cleanSearch = searchTerm.toLowerCase().trim();
		if (!cleanSearch) return LANGUAGES_OPTIONS;
		return LANGUAGES_OPTIONS.filter(
			(opt) =>
				opt?.native_name?.toLowerCase().includes(cleanSearch) ||
				opt.english_name?.toLowerCase().includes(cleanSearch),
		);
	}, [searchTerm, LANGUAGES_OPTIONS]);

	const activeSelection = useMemo(
		() =>
			LANGUAGES_OPTIONS.find(
				(o) => o.iso_639_1 === filters.with_original_language,
			) || LANGUAGES_OPTIONS[0],
		[filters.with_original_language, LANGUAGES_OPTIONS],
	);

	const handleToggle = useCallback((isOpen) => {
		if (!isOpen) setSearchTerm("");
	}, []);

	const handleChange = useCallback(
		(isoCode) => {
			if (isoCode === activeSelection.iso_639_1) return;

			dispatch({
				type: "SET_FILTERS",
				payload: { ...filters, with_original_language: isoCode },
			});
		},
		[filters, activeSelection, dispatch],
	);

	const renderOptionLabel = (option) => (
		<Typography variant='body2' sx={{ fontSize: "0.875rem" }}>
			{option.native_name}
			{option.count > 0 && (
				<Box
					component='span'
					sx={{ ml: 0.5, color: "text.secondary", fontWeight: 400 }}
				>
					({option.count.toLocaleString()})
				</Box>
			)}
		</Typography>
	);

	const selectedOriginalLanguage = LANGUAGES_OPTIONS.find(
		(item) => item.iso_639_1 === filters.with_original_language,
	);
	return (
		<Select
			fullWidth
			displayEmpty
			value={activeSelection.iso_639_1 || ""}
			onOpen={() => handleToggle(true)}
			onClose={() => handleToggle(false)}
			renderValue={() => renderOptionLabel(activeSelection)}
			MenuProps={{
				autoFocus: false, // We handle focus manually for the search field
				PaperProps: MENU_PAPER_PROPS,
			}}
			sx={SELECT_STYLES}
		>
			{/* 
          Sticky Search Header 
          StopPropagation is critical here to prevent the Select from 
          interpreting keystrokes (like Space) as selection triggers.
      */}
			<ListSubheader
				disableSticky={false}
				sx={{ p: 1.5, backgroundColor: "white", zIndex: 10 }}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<TextField
					size='small'
					fullWidth
					autoFocus
					inputRef={searchFieldRef}
					placeholder='Filter'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Search fontSize='small' sx={{ color: "action.active" }} />
							</InputAdornment>
						),
					}}
				/>
			</ListSubheader>

			{/* 
          Dynamic List 
          Principal tip: Use a unique ID for keys (iso_639_1) rather than index.
      */}
			{filteredOptions.length > 0 ? (
				filteredOptions.map((option) => (
					<MenuItem
						key={option.iso_639_1 || "none"}
						value={option.iso_639_1 || ""}
						onClick={() => handleChange(option.iso_639_1)}
						sx={{
							py: 1,
							"&.Mui-selected": {
								backgroundColor: "#01b3e4 !important",
								color: "white",
								"& .MuiBox-root": { color: "white" }, // Ensure count text flips color
							},
						}}
					>
						{renderOptionLabel(option)}
					</MenuItem>
				))
			) : (
				<MenuItem disabled>
					<Typography variant='caption'>
						No results matching "{searchTerm}"
					</Typography>
				</MenuItem>
			)}
		</Select>
	);
};

export default LanguageFilter;
