import { useEffect } from "react";
import styles from "./MoviesContent.module.scss";
import { axiosInstance } from "../../lib/axios";

const MoviesContent = () => {

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axiosInstance.get("/movie/popular");
            const data = response.data;

            console.log(data);
        }

        fetchMovies();
    }, [])
    
	return (
		<div className={styles.moviesContent}>
			<div className={styles.container}></div>
		</div>
	);
};

export default MoviesContent;
