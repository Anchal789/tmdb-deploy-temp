import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "../../components/Typography";
import type { FunctionComponent } from "react";
import dayjs from "dayjs";

const MovieCard: FunctionComponent<{
	imgUrl?: string;
	title?: string;
	date?: string;
}> = ({ imgUrl, title, date }) => {
	return (
		<Card
			sx={{
				boxShadow:
					"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
				border: "1px solid #e3e3e3",
				borderRadius: "0.5rem",
			}}
		>
			<CardMedia
				image={`https://media.themoviedb.org/t/p/w220_and_h330_face${imgUrl}`}
				title={title}
				component='img'
				loading="lazy"
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant='h5'
					sx={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
					}}
					fontWeight={600}
					component='div'
				>
					{title}
				</Typography>
				<Typography sx={{ color: "text.secondary" }}>
					{dayjs(date).format("MMMM D, YYYY")}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default MovieCard;
