import { Slider as MuiSlider, type SliderProps } from "@mui/material";

const Slider = (
	props: SliderProps & {
		tallMarks: Array<number>;
		marks: Array<{ value: number; label: string }>;
	},
) => {
	const tallIndices = props.tallMarks
		.map((targetValue) => props.marks.findIndex((m) => m.value === targetValue))
		.filter((index) => index !== -1);

	const tallMarksSelector =
		tallIndices.length > 0
			? tallIndices.map((index) => `&[data-index="${index}"]`).join(", ")
			: "";
	return (
		<MuiSlider
			{...props}
			marks={props.marks}
			min={props.min || 0}
			max={props.max || 100}
			disableSwap
			valueLabelDisplay='auto'
			sx={{
				color: "#01b4e4",
				padding: "13px 0",
				"& .MuiSlider-thumb": {
					height: 20,
					width: 20,
					backgroundColor: "#01b4e4",
					zIndex: 20,
					boxShadow: "none",
					"&:hover, &.Mui-focusVisible, &.Mui-active": {
						boxShadow: "0px 0px 0px 4px rgba(1, 180, 228, 0.16)",
						backgroundColor: "#032541",
					},
					"&:active, &.Mui-focusVisible, &.Mui-active": {
						boxShadow: "0px 0px 0px 4px rgba(1, 180, 228, 0.16)",
						backgroundColor: "#032541",
					},
				},
				"& .MuiSlider-track": {
					border: "none",
					height: 8,
					zIndex: 20,
				},
				"& .MuiSlider-rail": {
					opacity: 0.5,
					backgroundColor: "#B3B5B6",
					height: 8,
				},
				"& .MuiSlider-mark": {
					backgroundColor: "#B3B5B6",
					height: 16,
					width: "1px",
					zIndex: 7,
					"&.MuiSlider-markActive": {
						opacity: 1,
						backgroundColor: "#B3B5B6",
					},
					...(tallMarksSelector && {
						[tallMarksSelector]: {
							height: 23,
						},
					}),
				},
				"& .MuiSlider-markLabel": {
					color: "#6b7280",
					fontSize: "14px",
				},
				...props.sx,
			}}
		/>
	);
};

export default Slider;
