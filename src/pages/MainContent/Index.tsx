import { lazy, useCallback, useEffect, useRef, useState } from "react";
import styles from "./MoviesContent.module.scss";
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

const AllFiltersComponent = lazy(() => import("./Filters/AllFiltersComponent"));
const MoviesContainer = lazy(() => import("./MoviesContainer/Movies"));

const MoviesContent = () => {
	const { state, dispatch } = useFilters();
	const { appliedFilters, isDirty, isFiltered } = state;

	const [isSearchButtonVisible, setIsSearchButtonVisible] =
		useState<boolean>(true);

	const filterContainerRef = useRef<HTMLDivElement>(null);

	const pageUrl = useLocation().pathname;

	const endpoint = isFiltered
		? `/discover/${API_URL_FOR_PAGE[pageUrl].includes("movie") ? "movie" : "tv"}`
		: `/${API_URL_FOR_PAGE[pageUrl]}`;

	const params = { ...appliedFilters };

	const { data, fetchNextPage, isLoading, isFetchingNextPage } =
		useInfiniteData<MovieType>({
			queryKey: ["movies&tv", endpoint, appliedFilters, pageUrl],
			url: endpoint,
			params: isFiltered ? { ...params } : {},
		});

	const { data: countriesData } = useData<Array<CountriesType>>({
		queryKey: ["countries"],
		url: "/configuration/countries",
		params: {},
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

	useEffect(() => {
		const handleScroll = () => {
			if (
				(filterContainerRef.current?.offsetHeight || 0) <=
				window.scrollY + window.innerHeight - 147
			) {
				setIsSearchButtonVisible(false);
			} else {
				setIsSearchButtonVisible(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{(isLoading || isFetchingNextPage) && <TopLoader />}
			<main className={styles.moviesContent}>
				<div className={styles.container}>
					<h3 className={styles.heading}>{headerTitle()}</h3>
					<div className={styles.mainContent}>
						<div>
							<div className={styles.filtersContainer} ref={filterContainerRef}>
								<AllFiltersComponent countriesData={countriesData || []} />
							</div>
							<Button
								sx={{
									backgroundColor: "#02B4E4",
									fontSize: "1.2rem",
									lineHeight: "1rem",
									fontWeight: 600,
									height: "44px",
									marginTop: "20px",
									borderRadius: "20px",
									color: "#fff",
									"&:hover": {
										backgroundColor: "#032541",
										color: "#ADB6BF",
									},
								}}
								onClick={() => dispatch({ type: "APPLY_FILTERS" })}
								disabled={!isDirty}
							>
								Search
							</Button>
						</div>
						<div>
							<MoviesContainer
								movies={data?.pages?.flatMap((page) => page.results) || []}
								isLoading={isLoading || isFetchingNextPage}
							/>
							{data?.pages?.flatMap((page) => page.results).length ===
							0 ? null : (
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
							)}
						</div>
					</div>
				</div>
			</main>
			{isDirty && isSearchButtonVisible && (
				<Button
					sx={{
						position: "sticky",
						bottom: 0,
						backgroundColor: "#02B4E4",
						fontSize: "1.2rem",
						lineHeight: "1rem",
						fontWeight: 600,
						height: "50px",
						borderRadius: "0px",
						zIndex: 1500,
						"&:hover": {
							backgroundColor: "#032541",
							color: "#ADB6BF",
						},
					}}
					onClick={() => dispatch({ type: "APPLY_FILTERS" })}
					disabled={!isDirty}
				>
					Search
				</Button>
			)}
		</>
	);
};

export default MoviesContent;
