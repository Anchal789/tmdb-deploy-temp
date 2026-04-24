import {
	Accordion as MuiAccordion,
	type AccordionProps,
	AccordionSummary,
	type AccordionSummaryProps,
	type TypographyProps,
} from "@mui/material";
import { type ReactNode, type SyntheticEvent } from "react";
import Typography from "./Typography";
import styles from "./Components.module.scss";

// ── Types ─────────────────────────────────────────────────────────────────────

type AppAccordionProps = Omit<AccordionProps, "children"> & {
	title: ReactNode;
	children: ReactNode;
	summaryProps?: Omit<AccordionSummaryProps, "expandIcon" | "children">;
	titleProps?: TypographyProps;
	expandIcon?: ReactNode;
	onToggle?: (event: SyntheticEvent, isExpanded: boolean) => void;
	className?: string;
};

const Accordion = ({
	title,
	children,
	summaryProps,
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
					marginTop: "12px",
				},
				...sx,
			}}
		>
			<AccordionSummary
				{...summaryProps}
				expandIcon={
					expandIcon ?? (
						<img
							src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg'
							alt='expand'
							className={styles["accordion-expand-icon"]}
							width={"1rem"}
							height={"1rem"}
						/>
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
			{children}
		</MuiAccordion>
	);
};

export default Accordion;
