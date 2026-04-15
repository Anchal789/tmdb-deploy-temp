import { COUNTRY_OPTIONS, SORT_BY_OPTIONS } from "../../../appConstants/filterConstants";
import Accordion from "../../../components/Accordion";
import Autocomplete from "../../../components/AutoComplete";
import TextField from "../../../components/TextFielld";
import styles from "./Filters.module.scss";

const Filters = () => {
	return (
		<div className={styles.filtersContainer}>
			<Accordion title='Sort'>
				Sort Result By
				<Autocomplete
					options={SORT_BY_OPTIONS.map((option) => option.label)}
					renderInput={() => <TextField />}
				/>
			</Accordion>
			{COUNTRY_OPTIONS.map((country) => (
				<div key={country.countryCode}>
					<img
						src={country.flagUrl}
						alt={`${country.name} flag`}
						width={20}
						height={15}
					/>
					<span>{country.name}</span>
				</div>
			))}
		</div>
	);
};

export default Filters;
