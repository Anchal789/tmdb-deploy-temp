import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import type { CustomDatePickerProps } from "../types/common";

const DatePicker = ({
	error,
	helperText,
	textFieldProps,
	sx,
	className,
	...props
}: CustomDatePickerProps) => {
	return (
		<MuiDatePicker
			{...props}
			sx={{
				width: "100%",
				...sx,
			}}
			className={className}
			slots={{
				openPickerIcon: () => {
					return (
						<svg
							viewBox='0 0 512 512'
							focusable='false'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							style={{
								width: "1rem",
								height: "1rem",
								display: "block",
							}}
						>
							<path d='M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z' />
						</svg>
					);
				},
			}}
			slotProps={{
				textField: {
					size: "small",
					fullWidth: true,
					error,
					helperText,
					...textFieldProps,
					sx: {
						"&:hover fieldset": {
							border: "1px solid #D3D3D4 !important",
						},
						"& fieldset": {
							borderColor: "#D3D3D4",
						},
						"& .MuiPickersOutlinedInput-root:hover .MuiPickersOutlinedInput-notchedOutline":
							{
								borderColor: "#D3D3D4",
								borderWidth: "1px",
							},

						"& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline":
							{
								borderColor: "#01b3e460 !important",
								borderWidth: "1px !important",
							},
						"& .MuiOutlinedInput-root": {
							paddingRight: 0,
							"&:hover .MuiOutlinedInput-notchedOutline": {
								borderColor: "#D3D3D4",
							},
							"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
								borderColor: "#111827",
								borderWidth: "1.5px",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#D3D3D4 !important",
								borderWidth: "1px !important",
							},
							"&.Mui-error .MuiOutlinedInput-notchedOutline": {
								borderColor: "#ef4444",
							},
						},
						"& .MuiPickersOutlinedInput-root": {
							paddingRight: "0",
						},
						"& .MuiInputAdornment-root": {
							backgroundColor: "#dee2e6",
							maxHeight: "none",
							alignSelf: "stretch",
							borderTopRightRadius: "0.375rem",
							borderBottomRightRadius: "0.375rem",
							"&:hover": {
								backgroundColor: "#ced4da",
								borderLeftColor: "#ced4da",

							},
						},
						"& .MuiSvgIcon-root": {
							color: "#000",
						},
						"& .MuiIconButton-root": {
							borderRadius: 0,
							borderTopRightRadius: "0.375rem",
							borderBottomRightRadius: "0.375rem",
							padding: "0.375rem",
							height: "100%",
							marginRight: "0",
							borderLeft: "1px solid #dee2e6",
							color: "#1e293b",
							"&:hover": {
								borderLeftColor: "#C6CCD1",
							}
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
						"& .MuiPickersSectionList-root": {
							fontSize: "0.81rem",
							height: "37.3px",
						},
						"& .MuiPickersInputBase-root": {
							borderRadius: ".375rem",
						},
						"& .Mui-focused:not(.Mui-error)": {
							border: "0px",
						},
						"& .MuiPickersInputBase-root-MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline":
							{
								border: "0px",
							},
						...textFieldProps?.sx,
					},
				},
				actionBar: {
					actions: ["today"],
				},
				popper: {
					sx: {
						"& .MuiPaper-root": {
							borderRadius: "12px",
							border: "1px solid #e5e7eb",
							boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
						},
					},
				},
			}}
		/>
	);
};

export default DatePicker;
