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
			slotProps={{
				textField: {
					size: "small",
					fullWidth: true,
					error,
					helperText,
					...textFieldProps,
					sx: {
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
					},
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
