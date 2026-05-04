import Typography from "../../components/Typography";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footerContent}>
					<section className={styles.footerLogoSection}>
						<img
							alt='The Movie Database (TMDB)'
							className={styles.tmdbLogo}
							src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
						/>
						<Typography className={styles.joinTheCommunityText}>
							JOIN THE COMMUNITY
						</Typography>
					</section>
					<div className={styles.footerLinksContainer}>
						<p className={styles.footerLinksTitle}>THE BASICS</p>
						<ul className={styles.footerLinksList}>
							<li>
								<p>About TMDB</p>
							</li>
							<li>
								<p>Contact Us</p>
							</li>
							<li>
								<p>API Documentation</p>
							</li>
							<li>
								<p>API for Business</p>
							</li>
							<li>
								<p>System Status</p>
							</li>
						</ul>
					</div>
					<div className={styles.footerLinksContainer}>
						<p className={styles.footerLinksTitle}>GET INVOLVED</p>
						<ul className={styles.footerLinksList}>
							<li>
								<p>Contribution Bible</p>
							</li>
							<li>
								<p>Add New Movie</p>
							</li>
							<li>
								<p>Add New TV Show</p>
							</li>
						</ul>
					</div>
					<div className={styles.footerLinksContainer}>
						<p className={styles.footerLinksTitle}>COMMUNITY</p>
						<ul className={styles.footerLinksList}>
							<li>
								<p>Guidelines</p>
							</li>
							<li>
								<p>Discussions</p>
							</li>
							<li>
								<p>Leaderboard</p>
							</li>
							<li>
								<p>Support Forums</p>
							</li>
						</ul>
					</div>
					<div className={`${styles.footerLinksContainer} ${styles["legal-container"]}`}>
						<p className={styles.footerLinksTitle}>LEGAL</p>
						<ul className={styles.footerLinksList}>
							<li>
								<p>Terms of Use</p>
							</li>
							<li>
								<p>API Terms of Use</p>
							</li>
							<li>
								<p>Privacy Policy</p>
							</li>
							<li>
								<p>DMCA Policy</p>
							</li>
						</ul>
					</div>
				</div>
				<Typography className={`${styles.buildText} ${styles["small-build-text"]}`}>
					Build 4e4caf3 (10106)
				</Typography>
			</footer>
				<Typography className={`${styles.buildText} ${styles["large-build-text"]}`}>
				Build 4e4caf3 (10106)
			</Typography>
		</>
	);
};

export default Footer;
