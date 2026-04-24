import type { FunctionComponent } from "react";
import styles from "./Movies.module.scss";
import type { MovieType } from "../../../types/movies";
import MovieCard from "../../../UI/MovieCard/MovieCard";
import Skeleton from "@mui/material/Skeleton";
import Typography from "../../../components/Typography";

const MoviesContainer: FunctionComponent<{
	movies: Array<MovieType>;
	isLoading?: boolean;
}> = ({ movies, isLoading }) => {
	return (
		<>
			<div className={styles.movies}>
				{isLoading &&
					Array.from(new Array(10)).map((index) => (
						<div key={index}>
							<Skeleton variant='rounded' height={280} />
							<Skeleton variant='text' height={40} />
							<Skeleton variant='text' />
						</div>
					))}
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						imgUrl={movie.poster_path}
						title={movie.title}
						date={movie.release_date}
					/>
				))}
			</div>
			{movies.length === 0 && !isLoading && (
				<Typography>No items were found that match your query.</Typography>
			)}
		</>
	);
};

export default MoviesContainer;
