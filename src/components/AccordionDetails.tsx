import {
	AccordionDetails as MuiAccordionDetails,
	type AccordionDetailsProps,
} from "@mui/material";

const AccordionDetails = (props: AccordionDetailsProps) => {
	return (
		<MuiAccordionDetails
			{...props}
			sx={{
				padding: "14px 16px 16px",
				...props?.sx,
			}}
		/>
	);
};

export default AccordionDetails;
