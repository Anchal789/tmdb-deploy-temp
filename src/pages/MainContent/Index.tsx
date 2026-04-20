import { useCallback, useEffect, useState } from "react";
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
	const { state, dispatch } = useFilters();
	const { filters } = state;

	const [hideButton, setHideButton] = useState<boolean>(false);

	const isFilterApplied = Object.values(filters).some(
		(value) => value !== null && value !== "",
	);

	const endpoint = isFilterApplied ? "/discover/movie" : "/movie/popular";

	const params = isFilterApplied ? { ...filters } : {};

	delete (params as any).page;

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

	useEffect(() => {
		const handleScroll = async () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 100
			) {
				setHideButton(true);
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
						<Filters countriesData={countriesData || []} />
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
