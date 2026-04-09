import { useEffect, useState } from "react";
import logo from "../../assets/tmdb-logo.svg";
import styles from "./Header.module.scss";
import { Add, Notifications, Search } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.pageYOffset;

			if (currentPosition > 50) {
				setHide((prevHide) => currentPosition > scrollPosition);
			} else {
				setHide(false);
			}
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} ${hide ? styles["hide-nav"] : ""}`}>
				<div className={styles.navigationBar}>
					<div className={styles["left-section"]}>
						<a href='/' className={styles["nav-logo"]}>
							<img src={logo} alt='logo' width='154' height='20' />
						</a>
						<ul className={styles["nav-list"]}>
							<li>
								<a href='/' className={styles["list-items"]}>Movies</a>
							</li>
							<li>
								<a href='/' className={styles["list-items"]}>TV Shows</a>
							</li>
							<li>
								<a href='/' className={styles["list-items"]}>People</a>
							</li>
							<li>
								<a href='/' className={styles["list-items"]}>Awards</a>
							</li>
							<li>
								<a href='/' className={styles["list-items"]}>More</a>
							</li>
						</ul>
					</div>
					<div className={styles["right-section"]}>
						<ul className={styles["nav-list"]}>
							<li>
								<a href='/'>
									<Add />
								</a>
							</li>
							<li>
								<a href='/'>
									<div className={styles["box-visible"]}>EN</div>
								</a>
							</li>
							<li>
								<a href='/'>
									<Notifications />
								</a>
							</li>
							<li>
								<a href='/'>
									{" "}
									<Avatar>H</Avatar>
								</a>
							</li>
							<li>
								<a href='/'>
									<Search />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
