import {
	Checkbox as MuiCheckbox,
	type CheckboxProps,
	FormControlLabel,
	type FormControlLabelProps,
	FormHelperText,
	Box,
} from "@mui/material";
import {
	CheckBox as CheckBoxIcon,
	CheckBoxOutlineBlank,
	IndeterminateCheckBox,
} from "@mui/icons-material";

type AppCheckboxProps = CheckboxProps & {
	label?: FormControlLabelProps["label"];
	helperText?: string;
	error?: boolean;
	labelPlacement?: FormControlLabelProps["labelPlacement"];
	formControlLabelSx?: FormControlLabelProps["sx"];
	className?: string;
};

const Checkbox = ({
	label,
	helperText,
	error = false,
	labelPlacement = "end",
	formControlLabelSx,
	sx,
	className,
	...props
}: AppCheckboxProps) => {
	const checkbox = (
		<MuiCheckbox
			{...props}
			icon={<CheckBoxOutlineBlank fontSize='small' />}
			checkedIcon={<CheckBoxIcon fontSize='small' />}
			indeterminateIcon={<IndeterminateCheckBox fontSize='small' />}
			sx={{
				padding: "6px",
				color: error ? "#ef4444" : "#9ca3af",
				"&.Mui-checked": {
					color: error ? "#ef4444" : "#111827",
				},
				"&.MuiCheckbox-indeterminate": {
					color: "#111827",
				},
				"&:hover": {
					backgroundColor: "rgba(17,24,39,0.04)",
				},
				"&.Mui-focusVisible": {
					outline: "2px solid #111827",
					outlineOffset: 2,
				},
				...sx,
			}}
		/>
	);

	return (
		<Box className={className}>
			{label ? (
				<FormControlLabel
					control={checkbox}
					label={label}
					labelPlacement={labelPlacement}
					sx={{
						marginLeft: 0,
						marginRight: 0,
						gap: 0.5,
						"& .MuiFormControlLabel-label": {
							fontSize: "14px",
							color: error ? "#ef4444" : "text.primary",
							lineHeight: 1.5,
						},
						...formControlLabelSx,
					}}
				/>
			) : (
				checkbox
			)}

			{helperText && (
				<FormHelperText
					error={error}
					sx={{ marginLeft: label ? "34px" : 0, fontSize: "11px", mt: 0.25 }}
				>
					{helperText}
				</FormHelperText>
			)}
		</Box>
	);
};

export default Checkbox;
