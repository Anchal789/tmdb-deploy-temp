import type { FunctionComponent } from "react";
import Typography from "./Typography";
import { type TypographyProps } from "@mui/material";


const FilterSectionTitle: FunctionComponent<{ title: string, sx?: TypographyProps }> = ({ title, sx }) => {
	return (
		<Typography
			fontWeight={300}
			sx={{
				lineHeight: "16px",
				color: "#000",
				display: "inline-flex",
				alignItems: "center",
				marginBottom: "10px",
				width: sx?.width || "100%",
				...sx
			}}
		>
            {title}
		</Typography>
	);
};

export default FilterSectionTitle;
