import {
	Checkbox as MuiCheckbox,
	type CheckboxProps,
	type FormControlLabelProps,
	FormHelperText,
} from "@mui/material";
import FormControlLabel from "./FormControlLabel";
import styles from "./Components.module.scss";

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
			icon={
				<span
					style={{
						width: 16,
						height: 16,
						borderRadius: 3,
						border: error ? "1px solid #ef4444" : "1px solid #d3d3d4",
						backgroundColor: "transparent",
						boxSizing: "border-box",
					}}
				/>
			}
			checkedIcon={
				<span
					style={{
						width: 16,
						height: 16,
						borderRadius: 3,
						backgroundColor: "#02B4E4",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						boxSizing: "border-box",
					}}
				>
					<svg
						width='10'
						height='10'
						viewBox='0 0 24 24'
						fill='none'
						stroke='white'
						strokeWidth='4'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='20 6 9 17 4 12'></polyline>
					</svg>
				</span>
			}
			indeterminateIcon={
				<span
					style={{
						width: 16,
						height: 16,
						borderRadius: 3,
						backgroundColor: "#02B4E4",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						boxSizing: "border-box",
					}}
				>
					<svg
						width='10'
						height='10'
						viewBox='0 0 24 24'
						fill='none'
						stroke='white'
						strokeWidth='4'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<line x1='5' y1='12' x2='19' y2='12'></line>
					</svg>
				</span>
			}
			sx={{
				padding: 0,
				"&:hover": {
					backgroundColor: "transparent",
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
		<div className={`${className} ${styles.checkboxContainer}`}>
			{label ? (
				<FormControlLabel
					control={checkbox}
					label={label}
					labelPlacement={labelPlacement}
					sx={{
						marginLeft: 0,
						marginRight: 0,
						gap: 1,
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
					sx={{ marginLeft: label ? "24px" : 0, fontSize: "11px", mt: 0.25 }}
				>
					{helperText}
				</FormHelperText>
			)}
		</div>
	);
};

export default Checkbox;
