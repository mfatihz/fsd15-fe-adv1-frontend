import MainPageTemplate from "../templates/main-page-template"
import { useEffect, useState } from "react"
import axios from "axios"

function Movies() {
  const [hero, setHero] = useState([]);
  const [galleries, setGalleries] = useState()

  const API_URL = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(`${API_URL}/hero/movies`);
        setHero(response.data);
      } catch (e) {
        console.error('Error fetching hero: ', e)
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await axios.get(`${API_URL}/galleries/movies`);
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

export default Movies