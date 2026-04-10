import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`, 
    },
});