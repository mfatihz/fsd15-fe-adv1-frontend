import axios from "axios";

export const getGalleries = (page) => {
    const API_URL = import.meta.env.VITE_API_URL;
    return axios.get(`${API_URL}/galleries/${page}`);
}