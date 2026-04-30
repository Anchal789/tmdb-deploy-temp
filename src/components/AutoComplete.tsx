import {
	Autocomplete as MuiAutocomplete,
	type AutocompleteProps,
	type TextFieldProps,
	type ChipTypeMap,
} from "@mui/material";
import type { ElementType } from "react";
import TextField from "./TextField";

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
	isSelectOnly = true,
	...props
}: AppAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & {
	isSelectOnly?: boolean;
}) => {
	return (
		<MuiAutocomplete
			className={className}
			{...props}
			slotProps={{
				config: {
					readOnly: isSelectOnly,
				},
			}}
			sx={{
				"& .MuiOutlinedInput-root": {
					borderRadius: "0.375rem",
					fontSize: "14px",
					cursor: isSelectOnly ? "pointer" : "text",
				},
				"&:hover": {
					backgroundColor: "#f8f9fa",
					borderRadius: "0.375rem",
				},
				"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
					{
						borderColor: "#01b3e460 !important",
					},
				"& .MuiAutocomplete-input": {
					cursor: isSelectOnly ? "pointer !important" : "inherit",
				},
				"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
					minHeight: "38px",
				},
				"&:hover .MuiOutlinedInput-notchedOutline": {
					borderColor: "#D3D3D4 !important",
				},
				...sx,
			}}
			popupIcon={
				<svg
					viewBox='0 0 512 512'
					focusable='false'
					xmlns='http://www.w3.org/2000/svg'
					fill='#212529'
					width={"1rem"}
					height={"1rem"}
				>
					<path d='M256 352 128 160h256z'></path>
				</svg>
			}
			renderInput={(params) => (
				<TextField
					{...params}
					{...textFieldProps}
					label={label}
					placeholder={placeholder}
					error={error}
					helperText={helperText}
					size='small'
					inputProps={{
						...params.inputProps,
						readOnly: isSelectOnly,
					}}
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
