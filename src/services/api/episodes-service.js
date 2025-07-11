import axios from "axios";

export const getEpisodes = (movieId) => {
    const API_URL = import.meta.env.VITE_API_URL;
    return axios.get(`${API_URL}/series/${movieId}/episodes`);
}