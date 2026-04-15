import { useCallback, useEffect, useMemo } from "react";
import styles from "./MoviesContent.module.scss";
import { fetchData } from "../../lib/axios";
import MoviesContainer from "./MoviesContainer/Movies";
import Filters from "./Filters/Filters";
import type { MovieResponseType, MovieType } from "../../types/movies";
import { PageURLTitleMap } from "../../appConstants/common";
import { useLocation } from "react-router";
import { useData, useMutateData } from "../../lib/useData";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { ApiResponse } from "../../types/common";

const MoviesContent = () => {
	const { data, isLoading, error } = useData<MovieType>({
		queryKey: ["movies"],
		url: "/movie/popular",
	});
	
	const movies = useMemo(() => {
		return data?.results ?? [];
	}, [data]);
	
	
	
	
	// const moviesStore: { movies: Array<MovieType> } = useSelector(
	// 	(state: { movies: Array<MovieType> }) => state,
	// );
		
	// const dispatch = useDispatch();
	// const queryClient = useQueryClient();
	// const { mutate } = useMutateData();
	// useEffect(() => {
	// 	dispatch({ type: "SET_MOVIES", payload: movies });
	// }, [movies, dispatch]);
	// useEffect(() => {

	// 	const fetchMovies = async () => {
	// 		const response = await fetchData<MovieResponseType>({
	// 			url: "movie/popular",
	// 		});
	// 		const data = response.data;

	// 		// console.log(data);
	// 	};

	// 	fetchMovies();
	// 	const discoverMovies = async () => {
	// 		const response = await fetchData({
	// 			url: "discover/movie",
	// 			params: {
	// 				sort_by: "popularity.desc",
	// 				include_adult: false,
	// 				include_video: false,
	// 				page: 1,
	// 			},
	// 		});
	// 		const data = response.data;

	// 		// console.log("discover",data);
	// 	};

	// 	discoverMovies();

	// const onAirTv = async () => {
	// 	const response = await fetchData({
	// 		url: "/tv/on_the_air",
	// 	});
	// 	const data = response.data;

	// 	console.log(data);
	// };

	// onAirTv();
	// }, []);

	const pageUrl = useLocation().pathname;
	const headerTitle = useCallback(() => {
		return PageURLTitleMap[pageUrl] || "Movies";
	}, [pageUrl]);

	const handleAddFavorite = async () => {
		const response = await axios
			.create({
				baseURL: "https://api.themoviedb.org/3",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
				},
			})
			.get(
				"https://api.themoviedb.org/3/watch/providers/movie?language=en-US&watch_region=IN",
			);

		console.log(response.data);
		// mutate(
		// 	{
		// 		url: `/watch/providers/movie?language=en-US&watch_region=IS`,
		// 		payload: {
		// 			watch_region: "IS",
		// 			media_type: "movie",
		// 		},
		// 	},
		// 	{
		// 		// 3. Optional: What to do when it succeeds
		// 		onSuccess: (data) => {
		// 			console.log("Successfully added to favorites!", data);

		// 			// Pro-Tip: Tell React Query to refresh your movie lists so the UI updates!
		// 			queryClient.invalidateQueries({ queryKey: ["movies"] });
		// 		},
		// 		onError: (err) => {
		// 			console.error("Failed to add:", err.message);
		// 		},
		// 	},
		// );
	};

	return (
		<main className={styles.moviesContent}>
			<div className={styles.container}>
				<h3 className={styles.heading}>{headerTitle()}</h3>
				<div className={styles.mainContent}>
					<Filters />
					<MoviesContainer movies={movies} />
				</div>
			</div>
		</main>
	);
};

export default MoviesContent;
