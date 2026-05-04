import CardMedia from "@mui/material/CardMedia";
import Typography from "../../components/Typography";
import { type FunctionComponent } from "react";
import dayjs from "dayjs";
import styles from "./MovieCard.module.scss";

const MovieCard: FunctionComponent<{
	imgUrl?: string;
	title?: string;
	date?: string;
	description?: string;
}> = ({ imgUrl, title, date, description }) => {
	return (
		<div className={styles["movie-card"]}>
			<div>
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
						width: "100%",
						aspectRatio: "2 / 3",
						backgroundColor: "#e3e3e3",
						objectFit: imgUrl ? "cover" : "contain",
						padding: imgUrl ? "0" : "40px",
						cursor: "pointer",
					}}
					className={styles["movie-card-img"]}
				/>
			</div>
			<div className={styles["movie-card-content"]}>
				<div>
					<Typography
						variant='h5'
						sx={{
							fontSize: "1rem",
							lineHeight: "1rem",
						}}
						fontWeight={600}
						component='div'
						className={styles["movie-card-title"]}
					>
						{title}
					</Typography>
					<Typography
						className={styles["movie-card-date"]}
						sx={{ color: "text.secondary", lineHeight: "24px" }}
					>
						{dayjs(date).format("MMMM D, YYYY")}
					</Typography>
				</div>
				<Typography className={styles["movie-card-description"]}>
					{description}
				</Typography>
			</div>
		</div>
	);
};
export default MovieCard;
