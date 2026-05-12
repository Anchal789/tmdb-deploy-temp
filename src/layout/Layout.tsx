import { Outlet, useLocation } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

const ROUTE_TITLES: Record<string, string> = {
	"/movie": "Popular Movies",
	"/movie/now-playing": "Now Playing Movies",
	"/movie/upcoming": "Upcoming Movies",
	"/movie/top-rated": "Top Rated Movies",
	"/tv": "Popular TV Shows",
	"/tv/airing-today": "TV Shows Airing Today",
	"/tv/on-the-air": "Currently Airing TV Shows",
	"/tv/top-rated": "Top Rated TV Shows",
};

const Layout = () => {
	const location = useLocation();

	useEffect(() => {
		const pageTitle = ROUTE_TITLES[location.pathname];
		document.title = pageTitle ? `${pageTitle} — The Movie Database (TMDb)` : "The Movie Database (TMDb)";
	}, [location.pathname]);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
