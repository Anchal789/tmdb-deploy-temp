import { TextField as MuiTextField, type TextFieldProps } from "@mui/material";
import { type FunctionComponent } from "react";

const TextField: FunctionComponent<TextFieldProps> = (props) => {
	return (
		<MuiTextField
            variant='outlined'
            sx={{
                fontSize: "14px"
            }}
			fullWidth={props.fullWidth || true}
			{...props}
		/>
	);
};

export default TextField;
