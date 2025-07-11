import MainPageTemplate from "../templates/main-page-template"
import { useEffect, useState } from "react";
import { getHero } from "../../services/api/hero-service";
import { getGalleries } from "../../services/api/gallery-service";

function Home() {
  const [hero, setHero] = useState([]);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await getHero('home');
        setHero(response.data);
      } catch (e) {
        console.error('Error fetching hero: ', e)
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await getGalleries('home');
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

export default Home