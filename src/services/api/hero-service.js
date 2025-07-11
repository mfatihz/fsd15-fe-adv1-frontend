import axios from "axios";

export const getHero = (page) => {
    const API_URL = import.meta.env.VITE_API_URL;
    return axios.get(`${API_URL}/hero/${page}`);
}