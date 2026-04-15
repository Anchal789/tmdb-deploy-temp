import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import type { FunctionComponent } from "react";

const MovieCard: FunctionComponent<{
	imgUrl?: string;
	title?: string;
	date?: string;
}> = ({ imgUrl, title, date }) => {
	console.log(imgUrl);
	return (
		<Card
			sx={{
				boxShadow:
					"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
				border: "1px solid #e3e3e3",
				borderRadius: "0.5rem"
			}}
		>
			<CardMedia
				image={`https://media.themoviedb.org/t/p/w220_and_h330_face${imgUrl}`}
				title={title}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' sx={{ color: "text.secondary" }}>
					{date}
				</Typography>
			</CardContent>
			{/* <CardActions>
				<Button size='small'>Share</Button>
				<Button size='small'>Learn More</Button>
			</CardActions> */}
		</Card>
	);
};
export default MovieCard;
