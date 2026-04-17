import { SORT_BY_OPTIONS } from "../../../constants/filterConstants";
import Accordion from "../../../components/Accordion";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextFielld";
import styles from "./Filters.module.scss";
import { useFilters } from "../../../store/store";
import Typography from "../../../components/Typography";
import type { FunctionComponent } from "react";
import type { CountriesType } from "../../../types/filters";

const Filters: FunctionComponent<{
	countriesData: Array<CountriesType>;
}> = ({ countriesData }) => {
	const { state, dispatch } = useFilters();
	const { filters } = state;

	return (
		<div className={styles.filtersContainer}>
			<Accordion title='Sort'>
				Sort Result By
				<Autocomplete
					options={SORT_BY_OPTIONS.map((option) => option.label)}
					renderInput={() => <TextField />}
					onChange={(_event, value) =>
						dispatch({
							type: "SET_FILTERS",
							payload: {
								...filters,
								sort_by: SORT_BY_OPTIONS.find(
									(option) => option.label === value,
								)?.value,
							},
						})
					}
				/>
			</Accordion>
			<Accordion
				title={
					<div>
						<Typography fontWeight={600}>Where To Watch</Typography>
						<span></span>
					</div>
				}
			>
				<div>
					<Typography>Where To Watch</Typography>
					<span></span>
				</div>
				<Autocomplete
					options={countriesData.map((option) => option.native_name)}
					renderInput={() => <TextField />}
					onChange={(_event, value) =>
						dispatch({
							type: "SET_FILTERS",
							payload: {
								...filters,
								sort_by: countriesData.find((option) => option.native_name === value)
									?.iso_3166_1,
							},
						})
					}
				/>
			</Accordion>
			{/* {countriesData.map((country, index) => (
				<div key={index}>
					<img
						src={country.flagUrl}
						alt={`${country.name} flag`}
						width={20}
						height={15}
					/>
					<span>{country.name}</span>
				</div>
			))} */}
		</div>
	);
};

export default Filters;
