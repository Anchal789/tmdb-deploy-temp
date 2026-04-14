import { useCallback, useEffect } from "react";
import styles from "./MoviesContent.module.scss";
import { fetchData } from "../../lib/axios";
import MoviesContainer from "./MoviesContainer/Movies";
import Filters from "./Filters/Filters";
import type { MovieResponseType } from "../../types/movies";
import { PageURLTitleMap } from "../../appConstants/common";
import { useLocation } from "react-router";

const MoviesContent = () => {
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetchData<MovieResponseType>({
				url: "movie/popular"
			});
			const data = response.data;

            // console.log(data);
		};

		fetchMovies();
		const discoverMovies = async () => {
			const response = await fetchData({
                url: "discover/movie",
                params: {
                    sort_by: "popularity.desc",
                    include_adult: false,
                    include_video: false,
                    page: 1,
                },
			});
			const data = response.data;

			// console.log("discover",data);
		};

		discoverMovies();
    }, []);

    const pageUrl = useLocation().pathname;    
    const headerTitle = useCallback(() => {
        return PageURLTitleMap[pageUrl] || "Movies"; // Fallback to "Movies" if the path is not found in the map
    }, [pageUrl])

	return (
		<div className={styles.moviesContent}>
            <div className={styles.container}>
                <h3 className={styles.heading}>{headerTitle()}</h3>
				<Filters />
				<MoviesContainer />
			</div>
		</div>
	);
};

export default MoviesContent;
