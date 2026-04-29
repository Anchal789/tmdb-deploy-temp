import {
	FormControlLabel as MuiFormControlLabel,
	type FormControlLabelProps,
} from "@mui/material";
import type { FunctionComponent } from "react";

const FormControlLabel: FunctionComponent<FormControlLabelProps> = ({
	...props
}) => {
	return (
		<MuiFormControlLabel
			{...props}
			sx={{
				...props.sx,
				display: "flex",
				alignItems: "center",
				height: props?.sx?.height || "26px",
				margin: "0",
				"& .MuiFormControlLabel-label": {
					fontSize: "16px",
					lineHeight: "24px",
					marginLeft: "8px",
					color: props.disabled ? "rgba(0, 0, 0, 0.4)" : "#000",
				},
				"& .MuiFormControlLabel-label.Mui-disabled": {
					color: "#000",
				},
			}}
		/>
	);
};

export default FormControlLabel;
