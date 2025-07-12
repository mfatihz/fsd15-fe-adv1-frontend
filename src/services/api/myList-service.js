import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getMyListIds = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}`);
        return response?.data?.ids;
    } catch (e) {
        console.error('Error getting MyList:', e);
        throw e;
    }
}

export const getMyListGalleries = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}/galleries`);
        return response?.data;
    } catch (e) {
        console.error('Error getting MyList:', e);
        throw e;
    }
}

export const toggleMyListId = async (userId, movieId) => {
    try {
        const response = await axios.put(`${API_URL}/mylist/${userId}/toggle`, { movieId });
        return response?.data?.ids;
    } catch (e) {
        console.error('Error add to MyList:', e);
        throw e;
    }
}

export const checkMovieId = async (userId, movieId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}/${movieId}`);
        return response.data.has;
    } catch (e) {
        console.error('Error getting MyList:', e);
        throw e;
    }
}