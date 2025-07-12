import { useEffect, useState } from 'react';
// import { myList } from "../../utils/data/my-list-page-data"
import MainPageTemplate from "../templates/main-page-template"

import useLocalStorage from "../../hooks/use-local-storage";
import { getMyListGalleries } from '../../services/api/myList-service';

function MyList() {
  const [userId] = useState('chill_user')
  const [ galleries, setGalleries ] = useState([]);
  
  const { storedValue } = useLocalStorage('my-lists', new Set());

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const galleriesData = await getMyListGalleries(userId);
        setGalleries(galleriesData);
      } catch (error) {
        console.error('Failed to fetch galleries:', error);
      }
    };

    fetchGalleries();
  }, [userId]);
  
  return (
    <MainPageTemplate
      galleries={galleries}
    />
  );
}

export default MyList;