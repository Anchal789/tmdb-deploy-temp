import React, { useEffect, useState } from "react";
import logo from "../../assets/tmdb-logo.svg";
import styles from "./Header.module.scss";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router";
import { useGlobalState } from "../../store/store";

const Header = () => {
	const { state, dispatch } = useGlobalState();
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [hide, setHide] = useState<boolean>(false);
	const [activeMenu, setActiveMenu] = useState<"movies" | "tv" | null>(null);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handlePopoverOpen = (
		event: React.MouseEvent<HTMLElement>,
		menu: "movies" | "tv",
	) => {
		setAnchorEl(event.currentTarget);
		setActiveMenu(menu);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
		setActiveMenu(null);
	};

	const open = Boolean(anchorEl);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.pageYOffset;

			if (currentPosition > 100) {
				setHide(currentPosition > scrollPosition);
			} else {
				setHide(false);
			}
			setScrollPosition(currentPosition);
		};

		if (!state.isDrawerOpen)
			window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition, state.isDrawerOpen]);

	const handleDrawerToggle = () => {
		dispatch({ type: "TOGGLE_DRAWER" });
	};
	return (
		<header className={`${styles.header} ${hide ? styles["hide-header"] : ""}`}>
			<nav className={styles.nav}>
				<div className={styles["nav-container-xl"]}>
					<div className={styles["left-section"]}>
						<a href='/' className={styles["nav-logo"]}>
							<img src={logo} alt='logo' width='154' height='20' />
						</a>
						<ul className={styles["nav-list"]}>
							<li
								onMouseEnter={(e) => handlePopoverOpen(e, "movies")}
								onMouseLeave={handlePopoverClose}
								style={{ position: "relative" }}
							>
								<a
									className={styles["list-content"]}
									aria-owns={open ? "mouse-over-popover" : undefined}
									aria-haspopup='true'
								>
									Movies
								</a>
								<PopoverContent
									anchorEl={anchorEl}
									open={activeMenu === "movies"}
									listContent={[
										{ name: "Popular", url: "/movie" },
										{ name: "Now Playing", url: "/movie/now-playing" },
										{ name: "Upcoming", url: "/movie/upcoming" },
										{ name: "Top Rated", url: "/movie/top-rated" },
									]}
								/>
							</li>
							<li
								onMouseEnter={(e) => handlePopoverOpen(e, "tv")}
								onMouseLeave={handlePopoverClose}
								style={{ position: "relative" }}
							>
								<a
									className={styles["list-content"]}
									aria-owns={open ? "mouse-over-popover" : undefined}
									aria-haspopup='true'
								>
									TV Shows
								</a>
								<PopoverContent
									anchorEl={anchorEl}
									open={activeMenu === "tv"}
									listContent={[
										{ name: "Popular", url: "/tv" },
										{ name: "Airing Today", url: "/tv/airing-today" },
										{ name: "On TV", url: "/tv/on-the-air" },
										{ name: "Top Rated", url: "/tv/top-rated" },
									]}
								/>
							</li>
							<li>
								<p className={styles["list-content"]}>People</p>
							</li>
							<li>
								<p className={styles["list-content"]}>Awards</p>
							</li>
							<li>
								<p className={styles["list-content"]}>More</p>
							</li>
						</ul>
					</div>
					<div className={styles["right-section"]}>
						<ul className={styles["nav-list"]}>
							<li className={styles["list-items"]}>
								<p className={styles["add-icon"]}>
									<img
										src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg'
										alt='Add icon'
										className={styles["add-icon-img"]}
									/>
								</p>
							</li>
							<li className={styles["list-items"]}>
								<div className={styles["list-content"]}>
									<p className={styles["box-visible"]}>EN</p>
								</div>
							</li>
							<li className={styles["list-items"]}>
								<p className={styles["list-content"]}>Login</p>
							</li>
							<li className={styles["list-items"]}>
								<p className={`${styles["list-content"]}`}>Join TMDB</p>
							</li>
							<li className={styles["list-items"]}>
								<p className={`${styles["search-icon"]}`}>
									<img
										src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg'
										alt='Search'
										className={styles["search-icon-img"]}
									/>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles["nav-container-sm"]}>
					<div className={styles["menu-items"]}>
						<p
							className={`${styles["menu-icon"]}`}
							onClick={handleDrawerToggle}
						>
							<img
								src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-600-menu-7ef6e3f4266b4b216a8ef5920da43fc8c96e1ee805a219c5628fed5bfac854d5.svg'
								alt='menu'
								className={styles["menu-icon-img"]}
							/>
						</p>
					</div>
					<div className={styles["logo-container"]}>
						<img
							src={
								"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
							}
							alt='logo'
							width='55'
							height='40'
						/>
					</div>
					<div className={styles["icon-container"]}>
						<div className={styles["list-items"]}>
							<p className={`${styles["user-icon"]}`}>
								<img
									src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-7de7dfcae838579a18f4eebc5b8847230d154718e481c5cd01c477cfcbc85993.svg'
									alt='user'
									className={styles["user-icon-img"]}
								/>
							</p>
						</div>
						<div className={styles["list-items"]}>
							<p className={`${styles["search-icon"]}`}>
								<img
									src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg'
									alt='Search'
									className={styles["search-icon-img"]}
								/>
							</p>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

const PopoverContent = ({
	anchorEl,
	open,
	listContent,
}: {
	anchorEl: HTMLElement | null;
	open: boolean;
	listContent?: Array<{
		name: string;
		url: string;
	}>;
}) => {
	const navigate = useNavigate();
	return (
		<Popover
			className={styles.popover}
			open={open}
			anchorEl={anchorEl}
			sx={{
				pointerEvents: "none",
			}}
			PaperProps={{
				sx: {
					pointerEvents: "auto",
					paddingTop: "6px",
					marginTop: "-0.35rem",
				},
			}}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "left",
			}}
			disableRestoreFocus
			disableEnforceFocus
			disableScrollLock
		>
			<ul className={styles["popover-list"]}>
				{listContent?.map((item, index) => (
					<li
						key={index}
						className={styles["popover-list-item"]}
						onClick={() => navigate(item.url)}
					>
						<p className={styles["popover-list-link"]}>{item.name}</p>
					</li>
				))}
			</ul>
		</Popover>
	);
};
