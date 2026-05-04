import { TextField as MuiTextField, type TextFieldProps } from "@mui/material";
import { type FunctionComponent } from "react";

const TextField: FunctionComponent<TextFieldProps> = (props) => {
	const { fullWidth = true, ...rest } = props;
	return (
		<MuiTextField
			variant='outlined'
			sx={{
				fontSize: "14px",
			}}
			fullWidth={fullWidth}
			{...rest}
		/>
	);
};

export default TextField;
