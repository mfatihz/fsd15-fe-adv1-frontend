import { getMovies } from "./_queryFunctions"
import { heroDB, continueDB, topDB, trendingDB, newDB } from './_galleries-db'

export const movieHero = getMovies(heroDB);

export const movieGalleries = [
    {
        title: "Melanjutkan Tonton Film",
        galleryType: "continue",
        movies: getMovies(continueDB),
    },
    {
        title: "Top Rating Film dan Series Hari ini",
        movies: getMovies(topDB),
    },
    {
        title: "Film Trending",
        movies: getMovies(trendingDB),
    },
    {
        title: "Rilis Baru",
        movies: getMovies(newDB),
    },
]