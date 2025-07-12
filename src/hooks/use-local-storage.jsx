import { useState, useEffect } from 'react';
import { checkMovieId, getMyListIds, toggleMyListId } from '../services/api/myList-service';

export default function useLocalStorage(key, initialValue = new Set()) {
  const [userId] = useState('chill_user'); // TODO: ganti dengan actual ID
  const [storedValue, setStoredValue] = useState(new Set(initialValue));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMyListIds(userId);
        const newSet = new Set(response);
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
      const response = await toggleMyListId(userId, movieId);
      const newSet = new Set(response);
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
      return await checkMovieId(userId, movieId);
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