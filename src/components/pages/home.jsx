//import { useEffect, useState } from 'react';
import HomeTemplate from "../templates/home-template"
import { navData as navLinks, menuData as menuLinks, genreData as genreLinks, helpData as helpLinks } from "../../utils/app/home-utils"
import { movieHero, movieGalleries } from "../../utils/data/home-page-data"
import useLocalStorage from "../../hooks/use-local-storage"

function Home() {
  const header = { navData:navLinks, menuData:menuLinks }
  const footer = { genreData:genreLinks, helpData:helpLinks }
  
  /*
    Note: pada tahap ini data masih statis, bisa langsung di export dari utils tanpa perlu useState dan useEffect  
    const [ hero, setHero ] = useState([]);
    const [ galleries, setGalleries ] = useState([]);
  */
  const hero = movieHero
  const galleries = movieGalleries

  const { toggleId: idToggleHandler, hasId: isInMyListHandler } = useLocalStorage('my-lists', new Set());

  /* 
  useEffect(() => {
    setHero(movieHero);
    setGalleries(movieGalleries);
  }, [movieHero, movieGalleries]);
   */

  return (
    <HomeTemplate
      header={header}
      footer={footer}
      hero={hero}
      galleries={galleries}
      idToggleHandler={idToggleHandler}
      isInMyListHandler={isInMyListHandler}
    />
  )
}

export default Home