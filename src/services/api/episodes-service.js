import axios from "axios";

export const getEpisodes = async (movieId) => {
    const VITE_API_URL = import.meta.env.VITE_API_URL;
    return await axios.get(`${VITE_API_URL}/series/${movieId}/episodes`);
}