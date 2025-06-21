import { useEffect, useState } from 'react';
import { navData, menuData, genreData, helpData } from "../../utils/app/home-utils"
import { myList } from "../../utils/data/list-page-data"
import HomeTemplate from "../templates/home-template"

import useLocalStorage from "../../hooks/use-local-storage";

function List() {
  const header = { navData: navData, menuData: menuData };
  const footer = { genreData: genreData, helpData: helpData };
  const [ galleries, setGalleries ] = useState([]);

  const { ids, toggleId: idToggleHandler, hasId: isInMyListHandler } = useLocalStorage('my-lists', new Set());

  useEffect(() => {
    // Convert Set to Array and fetch movies whenever ids change
    const fetchMovies = async () => {
      setGalleries(myList(ids));
    };

    fetchMovies();
  }, [ids]);
  
  return (
    <HomeTemplate
      header={header}
      footer={footer}
      galleries={galleries}
      idToggleHandler={idToggleHandler}
      isInMyListHandler={isInMyListHandler}
    />
  );
}

export default List;