import { Autocomplete as MuiAutocomplete } from "@mui/material";
import TextField from "./TextField";
import type { AppAutocompleteProps } from "../types/common";
import Typography from "./Typography";

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
				popper: {
					sx: {
						"& .MuiPaper-root": {
							paddingY: ".5rem",
							marginTop: "0.25rem",
							width: "226.4px",
							display: "flex",
							flexDirection: "column",
							overflow: "hidden",
							"& .MuiList-root": {
								paddingTop: 0,
								paddingBottom: 0,
								display: "flex",
								flexDirection: "column",
								height: "100%",
							},
							border: ".8px solid #21252933",
							borderRadius: "0.375rem",
							boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.125)",
						},
					},
				},
				listbox: {
					sx: {
						paddingY: 0,
						"& .MuiAutocomplete-option": {
							'&[aria-selected="true"]': {
								backgroundColor: "#01b3e4 !important",
								color: "#fff",
								"&:hover": {
									backgroundColor: "#032541 !important",
								},
							},
							"&:hover": {
								backgroundColor: "#DDE2E6 !important",
							},
						},
					},
				},
				chip: {
					sx: {
						background: "#e9ecef",
						borderWidth: ".8px",
						borderColor: "#21252957",
						borderStyle: "solid",
						display: "inline-flex",
						flexFlow: "row nowrap",
						alignItems: "center",
						justifyContent: "center",
						gap: "0.25rem",
						position: "relative",
						overflow: "hidden",
						borderRadius: "0.375rem",
						cursor: "pointer",
						"& .MuiChip-label": {
							padding: ".25rem 0 .25rem .5rem",
							color: "#000",
							lineHeight: "1.25rem",
						},
						"& .MuiChip-deleteIcon": {
							color: "#000",
							width: "0.875rem",
							height: "0.875rem",
							marginLeft: "0.5rem",
						},
						"&:hover": {
							background: "#CED4DA",
						},
					},
				},
				clearIndicator: {
					disableRipple: true,
					sx: {
						"&:hover": {
							color: "#000",
							backgroundColor: "#fff",
						},
					},
				},
				paper: {
					sx: {
						"& .MuiAutocomplete-noOptions": {
							height: "161.143px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						},
					},
				},
				popupIndicator: {
					disableRipple: true,
					sx: {
						transition: "none",
						"&:hover": {
							backgroundColor: "transparent",
						},
					},
				}
			}}
			sx={{
				...sx,
				"& .MuiOutlinedInput-root": {
					borderRadius: "0.375rem",
					fontSize: "14px",
					cursor: isSelectOnly ? "pointer" : "text",
					display: "flex",
					gap: "calc(0.375rem / 2)",
					paddingRight: "0 !important",
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
				"& .MuiChip-root": {
					margin: "0",
					height: "auto",
				},
				"& .MuiAutocomplete-popupIndicatorOpen": {
					transform: "none",
				},
			}}
			popupIcon={
				props.popupIcon || (
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
				)
			}
			clearIcon={
				props.clearIcon || (
					<svg
						focusable='false'
						aria-hidden='true'
						viewBox='0 0 24 24'
						data-testid='CloseIcon'
						xmlns='http://www.w3.org/2000/svg'
						width={16}
						height={16}
						fill='currentColor'
					>
						<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
					</svg>
				)
			}
			noOptionsText={
				props.noOptionsText || (
					<Typography fontWeight={100} sx={{ color: "#565e64" }}>
						No Data Found.
					</Typography>
				)
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
