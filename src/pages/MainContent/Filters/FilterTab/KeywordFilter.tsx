import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type FunctionComponent,
} from "react";
import { useData } from "../../../../lib/useData";
import type { Action } from "../../../../types/common";
import type { DiscoverFiltersType } from "../../../../types/filters";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import Autocomplete from "../../../../components/AutoComplete";
import TextField from "../../../../components/TextField";

const KeywordFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const [keyWordsSearchValue, setKeyWordsSearchValue] = useState<string>("");
	const [keyWordsDebouncedSearchValue, setKeyWordsDebouncedSearchValue] =
		useState<string>("");
	const [selectedKeyWords, setSelectedKeyWords] = useState<
		Array<{ id: number; name: string }>
	>([]);
	const hasCrossedThresholdForKeyWords = useRef<boolean>(false);

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

	return (
		<AccordionDetails
			sx={{
				borderBottom: "1px solid #e5e7eb",
				borderRadius: "8px 8px 0 0",
			}}
		>
			<FilterSectionTitle title='Keywords' />
			<Autocomplete
				multiple
				filterSelectedOptions
				inputValue={keyWordsSearchValue}
				options={keywordsData?.results || []}
				getOptionLabel={(option) => option.name || option.name}
				isOptionEqualToValue={(option, value) => option.id === value.id}
				value={selectedKeyWords}
				popupIcon={" "}
				isSelectOnly={false}
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
				placeholder={
					filters?.with_keywords && filters?.with_keywords?.length > 0
						? ""
						: "Filter by keywords..."
				}
				sx={{
					"&:hover": {
						backgroundColor: "#fff",
					},
				}}
			/>
		</AccordionDetails>
	);
};

export default KeywordFilter;
