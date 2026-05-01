import { type ChangeEvent, type Dispatch, type FunctionComponent } from "react";
import FormControlLabel from "../../../../components/FormControlLabel";
import type { DiscoverFiltersType } from "../../../../types/filters";
import type { Action } from "../../../../types/common";
import Checkbox from "../../../../components/Checkbox";
import styles from "../AllFiltersComponent.module.scss";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";

const AvailabilitiesFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const handleCheckboxesChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;

		const currentTypes = filters.with_watch_monetization_types
			? filters.with_watch_monetization_types.split("|")
			: [];

		let newTypes: string[];

		if (checked) {
			newTypes = [...currentTypes, name];
		} else {
			newTypes = currentTypes.filter((type) => type !== name);
		}

		dispatch({
			type: "SET_FILTERS",
			payload: {
				...filters,
				with_watch_monetization_types: newTypes.join("|"),
			},
		});
	};

	return (
		<AccordionDetails
			sx={{
				borderBottom: "1px solid #e5e7eb",
				borderRadius: "8px 8px 0 0",
			}}
		>
			<FilterSectionTitle title='Availabilities' />
			<FormControlLabel
				value='show_me'
				control={
					<Checkbox
						checked={filters.with_watch_monetization_types === null}
						onChange={(event) => {
							dispatch({
								type: "SET_FILTERS",
								payload: {
									...filters,
									with_watch_monetization_types: event.target.checked
										? null
										: "flatrate|free|ads|rent|buy",
								},
							});
						}}
					/>
				}
				label='Search all availabilities?'
			/>
			{filters.with_watch_monetization_types && (
				<div className={styles.availabilitiesCheckboxesContainer}>
					<FormControlLabel
						value='flatrate'
						control={
							<Checkbox
								name='flatrate'
								checked={filters.with_watch_monetization_types.includes(
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
								checked={filters.with_watch_monetization_types.includes("free")}
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
								checked={filters.with_watch_monetization_types.includes("ads")}
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
								checked={filters.with_watch_monetization_types.includes("rent")}
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
								checked={filters.with_watch_monetization_types.includes("buy")}
								onChange={handleCheckboxesChange}
							/>
						}
						label='Buy'
					/>
				</div>
			)}
		</AccordionDetails>
	);
};

export default AvailabilitiesFilter;
