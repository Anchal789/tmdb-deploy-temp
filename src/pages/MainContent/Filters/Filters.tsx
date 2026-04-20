import {
	COUNTRY_OPTIONS,
	SORT_BY_OPTIONS,
} from "../../../constants/filterConstants";
import Accordion from "../../../components/Accordion";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextFielld";
import styles from "./Filters.module.scss";
import { useFilters } from "../../../store/store";
import Typography from "../../../components/Typography";
import type { FunctionComponent } from "react";
import type { CountriesType } from "../../../types/filters";
import AccordionDetails from "../../../components/AccordionDetails";
import { Box } from "@mui/material";
import Checkbox from "../../../components/Checkbox";
import WhereToWatchFilter from "./WhereToWatchFilter";

const Filters: FunctionComponent<{
	countriesData: Array<CountriesType>;
}> = ({ countriesData }) => {
	const { state, dispatch } = useFilters();
	const { filters } = state;

	return (
		<div className={styles.filtersContainer}>
			<Accordion title='Sort'>
				<AccordionDetails>
					Sort Result By
					<Autocomplete
						options={SORT_BY_OPTIONS.map((option) => option.label)}
						value={
							SORT_BY_OPTIONS.find((option) => option.value === filters.sort_by)
								?.label
						}
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
						disableClearable
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion
				title={
					<div>
						<Typography fontWeight={600}>Where To Watch</Typography>
						<span></span>
					</div>
				}
			>
				<AccordionDetails
					sx={{
						borderBottom: "1px solid #e5e7eb",
						borderRadius: "8px 8px 0 0",
					}}
				>
					<Typography fontWeight={300}>My Services</Typography>
					<Box display={"flex"} alignItems={"center"}>
						<Checkbox disabled />
						<Typography>
							Restrict searches to my subscribed services?
						</Typography>
					</Box>
				</AccordionDetails>
				<AccordionDetails>
					<WhereToWatchFilter countriesData={countriesData} />
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Filters;
