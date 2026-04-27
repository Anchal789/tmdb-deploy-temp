import { Radio, type RadioProps } from "@mui/material";

const RadioButton = (props: RadioProps) => {
	return (
		<Radio
			{...props}
			icon={
				<span
					style={{
						width: 16,
						height: 16,
						borderRadius: "50%",
						border: "1px solid #ced4da", 
						backgroundColor: "transparent",
						boxSizing: "border-box", 
					}}
				/>
			}
			checkedIcon={
				<span
					style={{
						width: 16,
						height: 16,
						borderRadius: "50%",
						border: "5px solid #01b4e4",
						backgroundColor: "white",
						boxSizing: "border-box",
					}}
				/>
			}
			sx={{
				"&:hover": {
					backgroundColor: "transparent",
                },
                paddingY: "0px",
                lineHeight: "24px",
				...props.sx,
			}}
		/>
	);
};

export default RadioButton;
