import type { FunctionComponent } from "react";
import Typography from "./Typography";

const FilterSectionTitle: FunctionComponent<{ title: string }> = ({ title }) => {
	return (
		<Typography
			fontWeight={300}
			sx={{
				lineHeight: "16px",
				color: "#000",
				display: "inline-flex",
				alignItems: "center",
				marginBottom: "10px",
				width: "100%",
			}}
		>
            {title}
		</Typography>
	);
};

export default FilterSectionTitle;
