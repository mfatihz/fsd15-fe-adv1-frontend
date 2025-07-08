import MainPageTemplate from "../templates/main-page-template"
import { useEffect, useState } from "react"
import axios from "axios"

function Series() {
  const [hero, setHero] = useState([]);
  const [galleries, setGalleries] = useState()

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hero/series');
        setHero(response.data);
      } catch (e) {
        console.error('Error fetching hero: ', e)
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/galleries/series');
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