import { useEffect, useState } from 'react';
import { myList } from "../../utils/data/my-list-page-data"
import MainPageTemplate from "../templates/main-page-template"

import useLocalStorage from "../../hooks/use-local-storage";

function MyList() {
  const [ galleries, setGalleries ] = useState([]);
  
  const { ids } = useLocalStorage('my-lists', new Set());

  useEffect(() => {
    const fetchMovies = async () => {
      setGalleries(myList(ids));
    };

    fetchMovies();
  }, [ids]);
  
  return (
    <MainPageTemplate
      galleries={galleries}
    />
  );
}

export default MyList;