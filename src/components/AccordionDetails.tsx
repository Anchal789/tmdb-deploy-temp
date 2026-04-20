import {
	AccordionDetails as MuiAccordionDetails,
	type AccordionDetailsProps,
} from "@mui/material";

const AccordionDetails = (props: AccordionDetailsProps) => {
	return (
		<MuiAccordionDetails
			{...props}
			sx={{
				px: 2,
				py: 2,
				fontSize: "14px",
				...props?.sx,
			}}
		/>
	);
};

export default AccordionDetails;
