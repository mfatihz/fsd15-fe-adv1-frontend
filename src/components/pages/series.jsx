import MainPageTemplate from "../templates/main-page-template"
import { useEffect, useState } from "react"
import { getHero } from "../../services/api/hero-service";
import { getGalleries } from "../../services/api/gallery-service";

function Series() {
  const [hero, setHero] = useState([]);
  const [galleries, setGalleries] = useState()

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await getHero('series');
        setHero(response.data);
      } catch (e) {
        console.error('Error fetching hero: ', e)
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await getGalleries('series');
        setGalleries(response.data);
      } catch (e) {
        console.error('Error fetching galleries: ', e)
      }
    };

    fetchHero();
    fetchGalleries();
  }, []);

  return (
    <MainPageTemplate
      hero={hero}
      galleries={galleries}
    />
  )
}

export default Series