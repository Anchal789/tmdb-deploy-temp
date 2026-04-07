import { useEffect, useState } from "react";
import logo from "./tmdb.svg";
import styles from "../../styles/Header/Header.module.css";
import { Add } from "@mui/icons-material";

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
					<a href='/' className={styles["nav-logo"]}>
						<img src={logo} alt='logo' width='154' height='20' />
					</a>

					<div className={styles["nav-list-container"]}>
						<ul>
							<li>
								<a href='/'>Movies</a>
							</li>
							<li>
								<a href='/'>TV Shows</a>
							</li>
							<li>
								<a href='/'>People</a>
							</li>
							<li>
								<a href='/'>More</a>
							</li>
						</ul>

						<ul>
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
								<a href='/'>Login</a>
							</li>
							<li>
								<a href='/'>Join TMDb</a>
							</li>
							<li>
								<a href='/'>
									<i className='material-icons' style={{ color: "#64b5f6" }}>
										search
									</i>
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
