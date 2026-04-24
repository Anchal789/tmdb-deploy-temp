import {
	Autocomplete as MuiAutocomplete,
	type AutocompleteProps,
	type TextFieldProps,
	type ChipTypeMap,
} from "@mui/material";
import type { ElementType } from "react";
import TextField from "./TextFielld";

type AppAutocompleteProps<
	T,
	Multiple extends boolean | undefined = false,
	DisableClearable extends boolean | undefined = false,
	FreeSolo extends boolean | undefined = false,
	ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
> = AutocompleteProps<
	T,
	Multiple,
	DisableClearable,
	FreeSolo,
	ChipComponent
> & {
	label?: string;
	placeholder?: string;
	error?: boolean;
	helperText?: string;
	textFieldProps?: Omit<
		TextFieldProps,
		"label" | "placeholder" | "error" | "helperText"
	>;
	className?: string;
};
const Autocomplete = <
	T,
	Multiple extends boolean | undefined = false,
	DisableClearable extends boolean | undefined = false,
	FreeSolo extends boolean | undefined = false,
>({
	label,
	placeholder,
	error,
	helperText,
	textFieldProps,
	sx,
	className,
	...props
}: AppAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
	return (
		<MuiAutocomplete
			className={className}
			{...props}
			sx={{
				"& .MuiOutlinedInput-root": {
					borderRadius: "8px",
					fontSize: "14px",
				},
				...sx,
			}}
			renderInput={(params) => (
				<TextField
					{...params}
					{...textFieldProps}
					label={label}
					placeholder={placeholder}
					error={error}
					helperText={helperText}
					size='small'
					sx={{
						"& .MuiOutlinedInput-root": {
							borderRadius: "8px",
							fontSize: "14px",
							"&:hover .MuiOutlinedInput-notchedOutline": {
								borderColor: "#9e9e9e",
							},
							"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
								borderColor: "#111827",
								borderWidth: "1.5px",
							},
							"&.Mui-error .MuiOutlinedInput-notchedOutline": {
								borderColor: "#ef4444",
							},
						},
						"& .MuiInputLabel-root": {
							fontSize: "14px",
							"&.Mui-focused": { color: "#111827" },
							"&.Mui-error": { color: "#ef4444" },
						},
						"& .MuiFormHelperText-root": {
							marginLeft: 0,
							fontSize: "11px",
						},
						...textFieldProps?.sx,
					}}
				/>
			)}
		/>
	);
};

export default Autocomplete;
