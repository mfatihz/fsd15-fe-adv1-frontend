import axios from "axios";

export const getGalleries = async (page) => {
    const VITE_API_URL = import.meta.env.VITE_API_URL;
    return await axios.get(`${VITE_API_URL}/galleries/${page}`);
}