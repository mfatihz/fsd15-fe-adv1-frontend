import MainPageTemplate from "../templates/main-page-template"
import { movieHero, movieGalleries } from "../../utils/data/series-page-data"

function Series() {
  const hero = movieHero
  const galleries = movieGalleries

  return (
    <MainPageTemplate
      hero={hero}
      galleries={galleries}
    />
  )
}

export default Series