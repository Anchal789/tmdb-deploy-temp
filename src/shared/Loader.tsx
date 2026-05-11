import { CircularProgress, Box } from "@mui/material";

type LoaderProps = {
	size?: number;
	fullScreen?: boolean;
};

const Loader = ({ size = 40, fullScreen = false }: LoaderProps) => {
	if (fullScreen) {
		return (
			<Box
				sx={{
					height: "100vh",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CircularProgress size={size} />
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "20px",
			}}
		>
			<CircularProgress size={size} />
		</Box>
	);
};

export default Loader;
