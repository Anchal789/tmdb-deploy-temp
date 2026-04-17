import { useCallback, useState } from "react";
import styles from "./MoviesContent.module.scss";
import MoviesContainer from "./MoviesContainer/Movies";
import Filters from "./Filters/Filters";
import type { MovieType } from "../../types/movies";
import { PAGE_URL_TITLE_MAP } from "../../constants/constants";
import { useLocation } from "react-router";
import { useData, useInfiniteData } from "../../lib/useData";
import Button from "../../components/Button";
import TopLoader from "../../UI/TopLoader";
import { useFilters } from "../../store/store";
import type { CountriesType } from "../../types/filters";

const MoviesContent = () => {
	const { state } = useFilters();
	const { filters } = state;

	const [hideButton, setHideButton] = useState<boolean>(false);

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
	
	const { data: countriesData } = useData<Array<CountriesType>>({
		queryKey: ["countries"],
		url: "/configuration/countries",
		params: { language: "en-US" },
	});

	const pageUrl = useLocation().pathname;
	const headerTitle = useCallback(() => {
		return PAGE_URL_TITLE_MAP[pageUrl] || "Movies";
	}, [pageUrl]);

	window.onscroll = function (ev) {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			console.log("Bottom of page");
			setHideButton(true);
			fetchNextPage();
		}
	};

	return (
		<>
			{(isLoading || isFetchingNextPage) && <TopLoader />}
			<main className={styles.moviesContent}>
				<div className={styles.container}>
					<h3 className={styles.heading}>{headerTitle()}</h3>
					<div className={styles.mainContent}>
						<Filters countriesData={countriesData} />
						<MoviesContainer
							movies={data?.pages?.flatMap((page) => page.results) || []}
							isLoading={isLoading || isFetchingNextPage}
						/>
					</div>
				</div>
			</main>
			{!hideButton && data?.pageParams && data?.pageParams.length > 1 && (
				<Button
					sx={{
						position: "sticky",
						bottom: 0,
						backgroundColor: "#02B4E4",
						fontSize: "1.2rem",
						lineHeight: "1rem",
						height: "50px",
						borderRadius: "0px",
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
