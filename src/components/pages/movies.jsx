import MainPageTemplate from "../templates/main-page-template"
import { movieHero, movieGalleries } from "../../utils/data/movies-page-data"

function Movies() {
  const hero = movieHero
  const galleries = movieGalleries

  return (
    <MainPageTemplate
      hero={hero}
      galleries={galleries}
    />
  )
}

export default Movies