import { Typography as MuiTypography, type TypographyProps } from "@mui/material";

const Typography = ({
	children,
	sx,
	className,
	...props
}: TypographyProps) => {
	return (
		<MuiTypography
			className={className}
			{...props}
			sx={{
				lineHeight: 1.6,
				color: "#000",
				...sx,
			}}
		>
			{children}
		</MuiTypography>
	);
};

export default Typography;
