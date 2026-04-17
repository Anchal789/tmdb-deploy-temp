import {
	Accordion as MuiAccordion,
	type AccordionProps,
	AccordionSummary,
	type AccordionSummaryProps,
	AccordionDetails,
	type AccordionDetailsProps,
	type TypographyProps,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { type ReactNode, type SyntheticEvent } from "react";
import Typography from "./Typography";

// ── Types ─────────────────────────────────────────────────────────────────────

type AppAccordionProps = Omit<AccordionProps, "children"> & {
	title: ReactNode;
	children: ReactNode;
	summaryProps?: Omit<AccordionSummaryProps, "expandIcon" | "children">;
	detailsProps?: AccordionDetailsProps;
	titleProps?: TypographyProps;
	expandIcon?: ReactNode;
	onToggle?: (event: SyntheticEvent, isExpanded: boolean) => void;
	className?: string;
};

const Accordion = ({
	title,
	children,
	summaryProps,
	detailsProps,
	titleProps,
	expandIcon,
	onToggle,
	sx,
	className,
	...props
}: AppAccordionProps) => {
	return (
		<MuiAccordion
			disableGutters
			elevation={0}
			className={className}
            onChange={onToggle}
			{...props}
			sx={{
				border: "1px solid #e5e7eb",
				borderRadius: "8px !important",
				overflow: "hidden",
				"&:before": { display: "none" },
                boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                "&:hover": { backgroundColor: "#fff" },
				"& + &": {
					marginTop: "8px",
				},
				...sx,
			}}
		>
			<AccordionSummary
				{...summaryProps}
				expandIcon={
					expandIcon ?? (
						<ChevronRight fontSize='small' sx={{ color: "#6b7280" }} />
					)
				}
				sx={{
					flexDirection: "row",
					minHeight: "48px",
					px: 2,
					py: 0,
					userSelect: "none",
					borderRadius: "10px",

					"& .MuiAccordionSummary-expandIconWrapper": {
						transform: "rotate(0deg)",
						// transition: "transform 0.25s ease",
					},
					"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
						transform: "rotate(90deg)",
					},

					"&.Mui-expanded": {
						borderBottom: "1px solid #e5e7eb",
						borderRadius: "8px 8px 0 0",
					},
					...summaryProps?.sx,
				}}
			>
				{typeof title === "string" ? (
					<Typography
						fontWeight={600}
						color='text.primary'
                        {...titleProps}
                        sx={{
                            fontSize: "18px",
                            lineHeight: "1",
                        }}
					>
						{title}
					</Typography>
				) : (
					title
				)}
			</AccordionSummary>

			<AccordionDetails
				{...detailsProps}
				sx={{
					px: 2,
					py: 2,
					fontSize: "14px",
					color: "text.secondary",
					...detailsProps?.sx,
				}}
			>
				{children}
			</AccordionDetails>
		</MuiAccordion>
	);
};

export default Accordion;
