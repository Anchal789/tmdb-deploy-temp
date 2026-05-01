import { useEffect, useRef, useState, type Dispatch, type FunctionComponent } from "react";
import AccordionDetails from "../../../../components/AccordionDetails";
import Autocomplete from "../../../../components/AutoComplete";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import TextField from "../../../../components/TextField";
import type { Action } from "../../../../types/common";
import type {
	DiscoverFiltersType,
	TvNetworksType,
} from "../../../../types/filters";
import { useData } from "../../../../lib/useData";

const NetworkFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const [tvNetworksSearchValue, setTvNetworkSearchValue] = useState<string>("");
	const [tvNetworksDebouncedSearchValue, setTvNetworksDebouncedSearchValue] =
		useState<string>("");
	const [selectedNetworks, setSelectedNetworks] = useState<
		Array<TvNetworksType>
	>([]);
	const hasCrossedThreshold = useRef<boolean>(false);

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

	return (
		<AccordionDetails
			sx={{
				borderBottom: "1px solid #e5e7eb",
				borderRadius: "8px 8px 0 0",
			}}
		>
			<FilterSectionTitle title='Network' />
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
	);
};

export default NetworkFilter;
