import { styled } from "@mui/material/styles";
import Tooltip, {
	type TooltipProps,
	tooltipClasses,
} from "@mui/material/Tooltip";
import React from "react";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#032541",
		color: "#fff",
		fontSize: "0.875rem",
		padding: "0.25rem 0.5rem",
		borderRadius: "0.375rem",
		boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.075)",
		minHeight: "29px",
		display: "flex",
		alignItems: "center",
	},
	[`& .${tooltipClasses.arrow}`]: {
		color: "#032541",
	},
}));

interface CustomTooltipProps extends Omit<TooltipProps, "children"> {
	children: React.ReactElement;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
	title,
	children,
	...props
}) => {
	return (
		<StyledTooltip
			title={title}
			arrow
			placement='top'
			{...props}
			slotProps={{
				popper: {
					modifiers: [
						{
							name: "offset",
							options: {
								offset: [0, -7],
							},
						},
					],
				},
				...props.slotProps,
			}}
		>
			{children}
		</StyledTooltip>
	);
};

export default CustomTooltip;
