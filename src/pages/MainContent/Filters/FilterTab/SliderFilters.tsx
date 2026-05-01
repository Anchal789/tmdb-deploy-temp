import type { Dispatch, FunctionComponent } from "react";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import Slider from "../../../../components/Slider";
import type { Action } from "../../../../types/common";
import type { DiscoverFiltersType } from "../../../../types/filters";

const SliderFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
}> = ({ dispatch, filters }) => {
	const handleUserScoreChange = (
		_event: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (activeThumb === 0) {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"vote_average.gte": (newValue as Array<number>)[0],
				},
			});
		} else {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"vote_average.lte": (newValue as Array<number>)[1],
				},
			});
		}
	};

	const handleMinimumUserScoreChange = (
		_event: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (activeThumb === 0) {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"vote_count.gte": newValue as number,
				},
			});
		}
	};

	const handleRuntimeChange = (
		_event: Event,
		newValue: number | number[],
		activeThumb: number,
	) => {
		if (activeThumb === 0) {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"with_runtime.gte": (newValue as Array<number>)[0],
				},
			});
		} else {
			dispatch({
				type: "SET_FILTERS",
				payload: {
					...filters,
					"with_runtime.lte": (newValue as Array<number>)[1],
				},
			});
		}
	};

	const generateMarks = (
		min: number,
		max: number,
		step: number,
		labeledValues: number[],
	) => {
		const marks = [];
		for (let i = min; i <= max; i += step) {
			marks.push({
				value: i,
				label: labeledValues.includes(i) ? i.toString() : "",
			});
		}

		if (marks[marks.length - 1].value !== max) {
			marks.push({
				value: max,
				label: labeledValues.includes(max) ? max.toString() : "",
			});
		}

		return marks;
	};

	return (
		<>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<FilterSectionTitle title='User Score' />
				<Slider
					getAriaLabel={() => "User Score"}
					value={[
						filters["vote_average.gte"] !== null
							? Number(filters["vote_average.gte"])
							: 0,
						filters["vote_average.lte"] !== null
							? Number(filters["vote_average.lte"])
							: 10,
					]}
					max={10}
					onChange={handleUserScoreChange}
					tallmarks={[0, 5, 10]}
					marks={Array.from({ length: 11 }, (_, index) => ({
						value: index,
						label: index % 5 === 0 ? index.toString() : "",
					}))}
					valueLabelFormat={() =>
						`Rated ${filters["vote_average.gte"]} - ${filters["vote_average.lte"]}`
					}
				/>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<FilterSectionTitle title='Minimum User Votes' />
				<Slider
					getAriaLabel={() => "Minimum User Votes"}
					value={
						filters["vote_count.gte"] !== null
							? Number(filters["vote_count.gte"])
							: 0
					}
					max={500}
					onChange={handleMinimumUserScoreChange}
					tallmarks={[0, 100, 200, 300, 400, 500]}
					marks={generateMarks(0, 500, 50, [0, 100, 200, 300, 400, 500])}
					step={50}
				/>
			</AccordionDetails>
			<AccordionDetails
				sx={{
					borderBottom: "1px solid #e5e7eb",
					borderRadius: "8px 8px 0 0",
				}}
			>
				<FilterSectionTitle title='Runtime' />
				<Slider
					getAriaLabel={() => "Runtime"}
					value={[
						filters["with_runtime.gte"] !== null
							? Number(filters["with_runtime.gte"])
							: 0,
						filters["with_runtime.lte"] !== null
							? Number(filters["with_runtime.lte"])
							: 400,
					]}
					max={400}
					onChange={handleRuntimeChange}
					tallmarks={[0, 120, 240, 360]}
					marks={generateMarks(0, 400, 15, [0, 120, 240, 360])}
					step={15}
					valueLabelFormat={() =>
						`${filters["with_runtime.gte"]} minutes - ${filters["with_runtime.lte"]} minutes`
					}
				/>
			</AccordionDetails>
		</>
	);
};
export default SliderFilter;
