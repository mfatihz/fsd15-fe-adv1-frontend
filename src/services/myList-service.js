import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export const getMyList = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/mylist/${userId}`);
        return response.data;
    } catch (e) {
        console.error('Error getting MyList:', e);
        //throw e;
    }
}

export const addToMyList = async (userId, movie) => {
    try {
        const response = await axios.post(`${API_URL}/mylist/${userId}`, {movie});
        return response.data;
    } catch (e) {
        console.error('Error add to MyList:', e);
        //throw e;
    }
}

export const removeFromMyList = async (userId, movieId) => {
    try {
        const response = await axios.delete(`${API_URL}/mylist/${userId}/${movieId}`);
        return response.data;
    } catch (e) {
        console.error('Error removing from MyList:', e);
        //throw e;
    }
}