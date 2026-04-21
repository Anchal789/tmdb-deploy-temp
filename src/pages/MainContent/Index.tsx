import { useCallback, useEffect } from "react";
import styles from "./MoviesContent.module.scss";
import MoviesContainer from "./MoviesContainer/Movies";
import type { MovieType } from "../../types/movies";
import {
	API_URL_FOR_PAGE,
	PAGE_URL_TITLE_MAP,
} from "../../constants/constants";
import { useLocation } from "react-router";
import { useData, useInfiniteData } from "../../lib/useData";
import Button from "../../components/Button";
import TopLoader from "../../UI/TopLoader";
import { useFilters } from "../../store/store";
import type { CountriesType } from "../../types/filters";
import AllFiltersComponent from "./Filters/AllFiltersComponent";

const MoviesContent = () => {
	const { state } = useFilters();
	const { filters, isDirty } = state;

	const pageUrl = useLocation().pathname;

	const endpoint = isDirty
		? `/discover/${API_URL_FOR_PAGE[pageUrl] === "movie/popular" ? "movie" : API_URL_FOR_PAGE[pageUrl] === "tv/popular" ? "tv" : API_URL_FOR_PAGE[pageUrl] === "movie/popular"}`
		: `/${API_URL_FOR_PAGE[pageUrl]}`;

	const params = isDirty ? { ...filters } : {};

	delete (params as any).page;

	const { data, fetchNextPage, isLoading, isFetchingNextPage } =
		useInfiniteData<MovieType>({
			queryKey: ["movies&tv", endpoint, params],
			url: endpoint,
			params: { ...params, language: "en-US" },
		});

	const { data: countriesData } = useData<Array<CountriesType>>({
		queryKey: ["countries"],
		url: "/configuration/countries",
		params: { language: "en-US" },
	});

	const headerTitle = useCallback(() => {
		return PAGE_URL_TITLE_MAP[pageUrl] || "Movies";
	}, [pageUrl]);

	useEffect(() => {
		const handleScroll = async () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 100
			) {
				await fetchNextPage();
			}
		};

		if (data?.pageParams.length === 1) return;
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [fetchNextPage, data?.pageParams.length]);

	return (
		<>
			{(isLoading || isFetchingNextPage) && <TopLoader />}
			<main className={styles.moviesContent}>
				<div className={styles.container}>
					<h3 className={styles.heading}>{headerTitle()}</h3>
					<div className={styles.mainContent}>
						<AllFiltersComponent countriesData={countriesData || []} />
						<div>
							<MoviesContainer
								movies={data?.pages?.flatMap((page) => page.results) || []}
								isLoading={isLoading || isFetchingNextPage}
							/>
							<Button
								sx={{
									backgroundColor: "#02B4E4",
									fontSize: "1.5rem",
									fontWeight: 700,
									lineHeight: "2.25rem",
									height: "50px",
									marginTop: "50px",
								}}
								onClick={() => fetchNextPage()}
							>
								Load More
							</Button>
						</div>
					</div>
				</div>
			</main>
			{isDirty && (
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
