import {
	useRef,
	type ChangeEvent,
	type Dispatch,
	type FunctionComponent,
} from "react";
import FormControlLabel from "../../../../components/FormControlLabel";
import type { DiscoverFiltersType } from "../../../../types/filters";
import type { Action } from "../../../../types/common";
import Checkbox from "../../../../components/Checkbox";
import styles from "../AllFiltersComponent.module.scss";

const AvailabilitiesFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const lastCheckedState = useRef<string>("");
	const availabilitiesTouched = useRef(false);
	const hasEverUnchecked = useRef(false);

	const handleCheckboxesChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;
		availabilitiesTouched.current = true;

		const currentTypes = filters.with_watch_monetization_types
			? filters.with_watch_monetization_types.split("|")
			: [];

		let newTypes: string[];

		if (checked) {
			newTypes = [...currentTypes, name];
		} else {
			newTypes = currentTypes.filter((type) => type !== name);
		}

		lastCheckedState.current = newTypes.join("|");

		dispatch({
			type: "SET_FILTERS",
			payload: {
				...filters,
				with_watch_monetization_types: newTypes.join("|"),
			},
		});
	};

	return (
		<>
			<FormControlLabel
				value='show_me'
				control={
					<Checkbox
						checked={filters.with_watch_monetization_types === null}
						onChange={(event) => {
							const isSearchingAll = event.target.checked;

							if (isSearchingAll) {
								if (!availabilitiesTouched.current) {
									lastCheckedState.current = "";
								}
                                availabilitiesTouched.current = false;
								hasEverUnchecked.current = true;

								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_watch_monetization_types: null,
									},
								});
							} else {
								const nextValue = hasEverUnchecked.current
									? lastCheckedState.current
									: "flatrate|free|ads|rent|buy";

								if (!hasEverUnchecked.current) {
									lastCheckedState.current = "flatrate|free|ads|rent|buy";
									hasEverUnchecked.current = true;
								}

								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_watch_monetization_types: nextValue,
									},
								});
							}
						}}
					/>
				}
				label='Search all availabilities?'
			/>
			{typeof filters.with_watch_monetization_types === "string" && (
				<div className={styles.availabilitiesCheckboxesContainer}>
					<FormControlLabel
						value='flatrate'
						control={
							<Checkbox
								name='flatrate'
								checked={(filters.with_watch_monetization_types || "").includes(
									"flatrate",
								)}
								onChange={handleCheckboxesChange}
							/>
						}
						label='Stream'
					/>
					<FormControlLabel
						value='free'
						control={
							<Checkbox
								name='free'
								checked={(filters.with_watch_monetization_types || "").includes(
									"free",
								)}
								onChange={handleCheckboxesChange}
							/>
						}
						label='Free'
					/>
					<FormControlLabel
						value='ads'
						control={
							<Checkbox
								name='ads'
								checked={(filters.with_watch_monetization_types || "").includes(
									"ads",
								)}
								onChange={handleCheckboxesChange}
							/>
						}
						label='Ads'
					/>
					<FormControlLabel
						value='rent'
						control={
							<Checkbox
								name='rent'
								checked={(filters.with_watch_monetization_types || "").includes(
									"rent",
								)}
								onChange={handleCheckboxesChange}
							/>
						}
						label='Rent'
					/>
					<FormControlLabel
						value='buy'
						control={
							<Checkbox
								name='buy'
								checked={(filters.with_watch_monetization_types || "").includes(
									"buy",
								)}
								onChange={handleCheckboxesChange}
							/>
						}
						label='Buy'
					/>
				</div>
			)}
		</>
	);
};

export default AvailabilitiesFilter;
