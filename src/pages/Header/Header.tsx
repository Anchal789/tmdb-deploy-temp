import { useEffect, useState } from "react";
import logo from "../../assets/tmdb-logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.pageYOffset;

			if (currentPosition > 50) {
				setHide(currentPosition > scrollPosition);
			} else {
				setHide(false);
			}
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);


	// const [scrollPosition, setScrollPosition] = useState(0);
	// const [hide, setHide] = useState(false);

	// useEffect(() => {
    //     const controlNavbar = () => {
    //         const currentScrollY = window.scrollY;
    //         if (currentScrollY > scrollPosition && currentScrollY > 64) {
    //             setHide(false);
    //         } else {
    //             setHide(true);
    //         }
    //         setScrollPosition(currentScrollY);
    //     };

    //     window.addEventListener("scroll", controlNavbar);
    //     return () => window.removeEventListener("scroll", controlNavbar);
    // }, [scrollPosition]);

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
								<a href='/' className={styles["list-content"]}>
									Movies
								</a>
							</li>
							<li>
								<a href='/' className={styles["list-content"]}>
									TV Shows
								</a>
							</li>
							<li>
								<a href='/' className={styles["list-content"]}>
									People
								</a>
							</li>
							<li>
								<a href='/' className={styles["list-content"]}>
									Awards
								</a>
							</li>
							<li>
								<a href='/' className={styles["list-content"]}>
									More
								</a>
							</li>
						</ul>
					</div>
					<div className={styles["right-section"]}>
						<ul className={styles["nav-list"]}>
							<li className={styles["list-items"]}>
								<a href='/' className={styles["add-icon"]}>
									<img
										src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg'
										alt='Add icon'
										className={styles["add-icon-img"]}
									/>
								</a>
							</li>
							<li className={styles["list-items"]}>
								<a href='/' className={styles["list-content"]}>
									<div className={styles["box-visible"]}>EN</div>
								</a>
							</li>
							<li className={styles["list-items"]}>
								<a href='/' className={styles["list-content"]}>
									Login
								</a>
							</li>
							<li className={styles["list-items"]}>
								<a
									href='/'
									className={`${styles["list-content"]}`}
								>
									Join TMDB
								</a>
							</li>
							<li className={styles["list-items"]}>
								<a href='/' className={`${styles["search-icon"]}`}>
									<img
										src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg'
										alt='Search'
										className={styles["search-icon-img"]}
									/>
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
