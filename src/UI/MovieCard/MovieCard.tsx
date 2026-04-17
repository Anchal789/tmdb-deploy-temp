import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "../../components/Typography";
import { type FunctionComponent } from "react";
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
				image={
					imgUrl
						? `https://media.themoviedb.org/t/p/w220_and_h330_face${imgUrl}`
						: "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
				}
				title={title}
				component='img'
				loading='lazy'
				sx={{
					backgroundSize: "50%",
				}}
			/>
			<CardContent sx={{ padding: ".75rem .75rem .5rem .75rem", "&:last-child": { paddingBottom: ".75rem" } }}>
				<Typography
					gutterBottom
					variant='h5'
					sx={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						marginBottom: "0.35em",
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
