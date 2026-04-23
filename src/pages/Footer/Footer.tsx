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
                        <Typography className={styles.joinTheCommunityText}>JOIN THE COMMUNITY</Typography>
                    </section>
                    <div className={styles.footerLinksContainer}>
                        <Typography className={styles.footerLinksTitle}>THE BASICS</Typography>
                        <ul className={styles.footerLinksList}>
                            <li>About TMDB</li>
                            <li>Contact Us</li>
                            <li>API Documentation</li>
                            <li>API for Business</li>
                            <li>System Status</li>
                        </ul>
                    </div>
                    <div className={styles.footerLinksContainer}>
                        <Typography className={styles.footerLinksTitle}>GET INVOLVED</Typography>
                        <ul className={styles.footerLinksList}>
                            <li>Contribution Bible</li>
                            <li>Add New Movie</li>
                            <li>Add New TV Show</li>
                        </ul>
                    </div>
                    <div className={styles.footerLinksContainer}>
                        <Typography className={styles.footerLinksTitle}>COMMUNITY</Typography>
                        <ul className={styles.footerLinksList}>
                            <li>Guidelines</li>
                            <li>Discussions</li>
                            <li>Leaderboard</li>
                            <li>Support Forums</li>
                        </ul>
                    </div>
                    <div className={styles.footerLinksContainer}>
                        <Typography className={styles.footerLinksTitle}>LEGAL</Typography>
                        <ul className={styles.footerLinksList}>
                            <li>Terms of Use</li>
                            <li>API Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>DMCA Policy</li>
                        </ul>
                    </div>
				</div>
			</footer>
			<Typography className={styles.buildText}>   
				Build 4e4caf3 (10106)
			</Typography>
		</>
	);
};

export default Footer;
