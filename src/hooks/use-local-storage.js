import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export default function useLocalStorage(key, initialValue = new Set()) {
  const [userId] = useState('chill_user'); // TODO: ganti dengan actual ID
  const [storedValue, setStoredValue] = useState(new Set(initialValue));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${API_URL}/mylist/${userId}`);
        const newSet = new Set(response.data.ids);
        setStoredValue(newSet);
        localStorage.setItem(key, JSON.stringify([...newSet]));
      } catch (error) {
        console.error('Failed to fetch from API:', error);
        try {
          const item = localStorage.getItem(key);
          if (item) {
            setStoredValue(new Set(JSON.parse(item)));
          }
        } catch (localError) {
          console.error('Failed to read from localStorage:', localError);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [userId, key]);

  const toggleId = async (movieId) => {
    try {
      const response = await axios.post(`${API_URL}/mylist/${userId}/toggle`, { movieId });
      const newSet = new Set(response.data.ids);
      setStoredValue(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      return newSet.has(movieId);
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      const newSet = new Set(storedValue);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      setStoredValue(newSet);
      localStorage.setItem(key, JSON.stringify([...newSet]));
      return newSet.has(movieId);
    }
  };

  const checkId = async (movieId) => {
    if (!isLoading) {
      return storedValue.has(movieId);
    }
    try {
      const response = await axios.get(`${API_URL}/mylist/${userId}/has/${movieId}`);
      return response.data.has;
    } catch (error) {
      console.error('API failed, using localStorage only:', error);
      return storedValue.has(movieId);
    }
  };

  return {
    ids: storedValue,
    toggleId,
    checkId,
    isLoading
  };
}