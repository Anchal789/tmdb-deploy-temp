import { Button as ButtonMui, CircularProgress, type ButtonProps } from "@mui/material";

const Button = ({
	loading = false,
	disabled,
	children,
	sx,
	className,
	...props
}: ButtonProps & {
	loading?: boolean;
}) => {
	return (
		<ButtonMui
			fullWidth
			disabled={disabled || loading}
			className={className}
		variant="contained"
			{...props}
			sx={{
				borderRadius: "8px",
				textTransform: "none",
				fontWeight: 500,
				fontSize: "14px",
				height: "40px",
				...sx,
			}}
		>
			{loading ? <CircularProgress size={18} color='inherit' /> : children}
		</ButtonMui>
	);
};

export default Button;
