import { useState } from 'react';

export default function useLocalStorage(key, initialValue = new Set()) {
  // Get initial value from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? new Set(JSON.parse(item)) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Toggle item in Set
  const toggleId = (id) => {
    const newSet = new Set(storedValue);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    
    // Update both state and localStorage
    setStoredValue(newSet);
    localStorage.setItem(key, JSON.stringify([...newSet]));
  };

  // Check if id exists
  const hasId = (id) => storedValue.has(id);

  return {
    ids: storedValue,
    toggleId,
    hasId
  };
}