import { useCallback, useState } from "react";
import styles from "./MoviesContent.module.scss";
import MoviesContainer from "./MoviesContainer/Movies";
import Filters from "./Filters/Filters";
import type { MovieType } from "../../types/movies";
import { PageURLTitleMap } from "../../appConstants/constants";
import { useLocation } from "react-router";
import { useInfiniteData } from "../../lib/useData";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import TopLoader from "../../UI/TopLoader";

const MoviesContent = () => {
	const { filters } = useSelector((state: any) => state.filters);
	const [hidebutton, setHideButton] = useState(false);

	const isFilterApplied = Object.values(filters).some(
		(value) => value !== null && value !== "",
	);

	const endpoint = isFilterApplied ? "/discover/movie" : "/movie/popular";

	const params = isFilterApplied ? { ...filters } : {};

	const { data, fetchNextPage, isLoading, isFetchingNextPage } =
		useInfiniteData<MovieType>({
			queryKey: ["movies", endpoint, params],
			url: endpoint,
			params,
		});

	const pageUrl = useLocation().pathname;
	const headerTitle = useCallback(() => {
		return PageURLTitleMap[pageUrl] || "Movies";
	}, [pageUrl]);

	window.onscroll = function (ev) {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			console.log("Bottom of page");
			setHideButton(true);
			fetchNextPage();
			// Load more content
		}
	};

	return (
		<>
			{(isLoading || isFetchingNextPage) && <TopLoader />}
			<main className={styles.moviesContent}>
				<div className={styles.container}>
					<h3 className={styles.heading}>{headerTitle()}</h3>
					<div className={styles.mainContent}>
						<Filters />
						<MoviesContainer
							movies={data?.pages?.flatMap((page) => page.results) || []}
						/>
					</div>
				</div>
			</main>
			{!hidebutton && (
				<Button
					sx={{
						position: "sticky",
						bottom: 0,
						backgroundColor: "#02B4E4",
						fontSize: "1.2rem",
						lineHeight: "1rem",
						height: "50px",
					}}
					onClick={() => fetchNextPage()}
				>
					Search
				</Button>
			)}
		</>
	);
};

export default MoviesContent;
