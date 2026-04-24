import { Tooltip as MuiTooltip, type TooltipProps } from "@mui/material";
import type { FunctionComponent } from "react";

const Tooltip: FunctionComponent<TooltipProps> = ({ ...props }) => (
	<MuiTooltip
		{...props}
		arrow={props.arrow || true}
        sx={{ backgroundColor: "#032541", color: "white" }}
        title={props.title}
        placement={props.placement || "top"}
	>
		{props.children}
	</MuiTooltip>
);

export default Tooltip;
