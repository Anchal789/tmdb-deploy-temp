import { LinearProgress, Box } from "@mui/material";
import { useEffect, useState } from "react";

const TopLoader = () => {
	const [progress, setProgress] = useState<number>(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(timer);
					return 100;
				}
				return prev + 10;
			});
		}, 200);

		return () => clearInterval(timer);
	}, []);

	return (
		<Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
			<LinearProgress
				variant='determinate'
				value={progress}
				sx={{
					height: "4px",
					"& .MuiLinearProgress-bar": {
						backgroundColor: "#02B4E4",
                    },
                    backgroundColor: "#fff"
				}}
			/>
		</Box>
	);
};

export default TopLoader;
