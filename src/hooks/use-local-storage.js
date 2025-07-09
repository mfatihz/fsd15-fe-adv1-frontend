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
  // fungsional dibungkus di sini agar jika ada perubahan struktur data tidak akan berpengaruh ke implementasi
  const hasId = (id) => storedValue.has(id);

  return {
    ids: storedValue,
    toggleId,
    hasId
  };
}



// import { useState } from 'react';
// import { addToMyList, getMyList, removeFromMyList } from '../services/myList-service';

// export default function useLocalStorage(userId) {
//   // const key = 'chillMyList';
//   const initialValue = {
//             user_id: userId,
//             movie: [],
            
//         };
        
//   // Get initial value from localStorage
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       return getMyList(userId);
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });

//   // Toggle item in Set
//   const toggleId = (userId, movieId) => {
//     const current = storedValue.movies.find(m => m === movieId);
//     if (current) {
//       try {
//         setStoredValue(removeFromMyList(userId, movieId));
//       } catch (e) {
//         console.error(e)
//       }
//     } else {
//       try {
//         setStoredValue(addToMyList(userId, movieId));
//       } catch (e) {
//         console.error(e)
//       }
      
//     }
    
//     // Update both state and localStorage
//     // setStoredValue(getMyList(userId));
//     // localStorage.setItem(key, JSON.stringify([...newSet]));
//   };

//   // Check if id exists
//   // fungsional dibungkus di sini agar jika ada perubahan struktur data tidak akan berpengaruh ke implementasi
//   const hasId = (id) => storedValue.movies.find(id);

//   return {
//     ids: storedValue,
//     toggleId,
//     hasId
//   };
// }