import {
	DatePicker as MuiDatePicker,
	type DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const DatePicker = ({
	error,
	helperText,
	placeholder,
	textFieldProps,
	sx,
	className,
	...props
}: DatePickerProps<Dayjs> ) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
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
						placeholder,
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
		</LocalizationProvider>
	);
};

export default DatePicker;
