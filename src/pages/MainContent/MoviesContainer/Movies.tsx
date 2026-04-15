import type { FunctionComponent } from "react";
import styles from "./Movies.module.scss";
import type { MovieType } from "../../../types/movies";
import MovieCard from "../../../UI/MovieCard/MovieCard";

const MoviesContainer: FunctionComponent<{ movies: Array<MovieType> }> = ({
	movies,
}) => {
	return (
		<div className={styles.movies}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					imgUrl={movie.poster_path}
					title={movie.title}
					date={movie.release_date}
				/>
				// <div key={movie.id}>
				//     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={styles.poster}/>
				// </div>
			))}
		</div>
	);
};

export default MoviesContainer;
