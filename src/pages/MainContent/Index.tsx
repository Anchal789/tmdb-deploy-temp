import { lazy, useEffect, useMemo, useRef, useState } from "react";
import styles from "./MoviesContent.module.scss";
import type { MovieType } from "../../types/movies";
import {
	API_URL_FOR_PAGE,
	PAGE_URL_TITLE_MAP,
} from "../../constants/constants";
import { useLocation } from "react-router";
import { useData, useInfiniteData } from "../../lib/useData";
import Button from "../../components/Button";
import TopLoader from "../../shared/TopLoader";
import { useGlobalState } from "../../store/store";
import type { CountriesType } from "../../types/filters";
import dayjs from "dayjs";

const AllFiltersComponent = lazy(() => import("./Filters/AllFiltersComponent"));
const MoviesContainer = lazy(() => import("./MoviesContainer/Movies"));

const MoviesContent = () => {
	const { state, dispatch } = useGlobalState();
	const { appliedFilters, isDirty, isFiltered } = state;

	const [isSearchButtonVisible, setIsSearchButtonVisible] =
		useState<boolean>(true);
	const [openMenus, setOpenMenus] = useState<string[]>([]);

	const filterContainerRef = useRef<HTMLDivElement>(null);

	const pageUrl = useLocation().pathname;

	const endpoint = isFiltered
		? `/discover/${API_URL_FOR_PAGE[pageUrl].includes("movie") ? "movie" : "tv"}`
		: `/${API_URL_FOR_PAGE[pageUrl]}`;

	const params = { ...appliedFilters };

	const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
		useInfiniteData<MovieType>({
			queryKey: ["movies&tv", endpoint, appliedFilters, pageUrl],
			url: endpoint,
			params: isFiltered
				? { ...params, language: "en-US" }
				: {
						language: "en-US",
						include_adult: false,
						include_softcore: false,
						"release_date.lte": dayjs().format("YYYY-MM-DD"),
					},
		});

	const { data: countriesData } = useData<Array<CountriesType>>({
		queryKey: ["countries"],
		url: "/configuration/countries",
		params: {},
	});

	const headerTitle = useMemo(() => {
		return PAGE_URL_TITLE_MAP[pageUrl] || "Movies";
	}, [pageUrl]);

	const toggleMenu = (menuName: string) => {
		setOpenMenus((prev) =>
			prev.includes(menuName)
				? prev.filter((item) => item !== menuName)
				: [...prev, menuName],
		);
	};

	useEffect(() => {
		const handleScroll = async () => {
			if (
				window.innerHeight + window.scrollY >=
					document.body.offsetHeight - 100 &&
				hasNextPage &&
				!isFetchingNextPage
			) {
				await fetchNextPage();
			}
		};

		if (data?.pageParams.length === 1) return;
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [fetchNextPage, data?.pageParams.length, isFetchingNextPage]);

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
					<h3 className={styles.heading}>{headerTitle}</h3>
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
										boxShadow: "none",
									}}
									onClick={() => fetchNextPage()}
								>
									Load More
								</Button>
							)}
						</div>
					</div>
				</div>
				<div
					className={`${styles.drawer} ${state.isDrawerOpen ? styles.show : ""}`}
				>
					<ul className={styles.drawerList}>
						<li
							className={styles.drawerListItem}
							onClick={() => toggleMenu("movies")}
						>
							<p className={styles.drawerListItemTitle}>Movies</p>
							{openMenus.includes("movies") && (
								<ul className={styles.listMenu}>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Popular</p>
									</li>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Top Rated</p>
									</li>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Upcoming</p>
									</li>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Now Playing</p>
									</li>
								</ul>
							)}
						</li>
						<li
							className={styles.drawerListItem}
							onClick={() => toggleMenu("tvShows")}
						>
							<p className={styles.drawerListItemTitle}>TV Shows</p>
							{openMenus.includes("tvShows") && (
								<ul className={styles.listMenu}>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Popular</p>
									</li>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Top Rated</p>
									</li>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>On TV</p>
									</li>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Airing Today</p>
									</li>
								</ul>
							)}
						</li>
						<li
							className={styles.drawerListItem}
							onClick={() => toggleMenu("people")}
						>
							<p className={styles.drawerListItemTitle}>People</p>
							{openMenus.includes("people") && (
								<ul className={styles.listMenu}>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Popular</p>
									</li>
								</ul>
							)}
						</li>
						<li
							className={styles.drawerListItem}
							onClick={() => toggleMenu("awards")}
						>
							<p className={styles.drawerListItemTitle}>Awards</p>
							{openMenus.includes("awards") && (
								<ul className={styles.listMenu}>
									<li className={styles.listMenuItem}>
										<p className={styles.listMenuItemTitle}>Popular</p>
									</li>
									<li
										className={`${styles.listMenuItem} ${styles.upcomingMenuItem}`}
									>
										<p className={styles.listMenuItemTitle}>Upcoming</p>
									</li>
								</ul>
							)}
						</li>
					</ul>
					<ul className={styles.drawerSubList}>
						<li className={styles.drawerListSubItem}>Contribution Bible</li>
						<li className={styles.drawerListSubItem}>Discussions</li>
						<li className={styles.drawerListSubItem}>Leaderboard</li>
						<li className={styles.drawerListSubItem}>API</li>
						<li className={styles.drawerListSubItem}>Support</li>
						<li className={styles.drawerListSubItem}>About</li>
						<li
							className={`${styles.drawerListSubItem} ${styles.loginSubItem}`}
						>
							Login
						</li>
					</ul>
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
