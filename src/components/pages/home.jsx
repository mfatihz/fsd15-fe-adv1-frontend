import MainPageTemplate from "../templates/main-page-template"
import { movieHero, movieGalleries } from "../../utils/data/home-page-data"

function Home() {
  /*
    Note: pada tahap ini data masih statis, bisa langsung di export dari utils tanpa perlu useState dan useEffect  
    const [ hero, setHero ] = useState([]);
    const [ galleries, setGalleries ] = useState([]);
  */
  const hero = movieHero
  const galleries = movieGalleries

  /* 
  useEffect(() => {
    setHero(movieHero);
    setGalleries(movieGalleries);
  }, [movieHero, movieGalleries]);
   */

  return (
    <MainPageTemplate
      hero={hero}
      galleries={galleries}
    />
  )
}

export default Home