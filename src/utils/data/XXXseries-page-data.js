import { getMovies } from "./_queryFunctions"
import { seriesHeroDB, continueDB, presentDB, topDB, trendingDB, newDB } from './_galleries-db'

export const movieHero = getMovies(seriesHeroDB);

export const movieGalleries = [
    {
        title: "Melanjutkan Tonton Series",
        galleryType: "continue",
        movies: getMovies(continueDB, 'series'),
    },
    {
        title: "Series Persembahan Chill",
        movies: getMovies(presentDB, 'series'),
    },
    {
        title: "Top Rating Series Hari Ini",
        movies: getMovies(topDB, 'series'),
    },
    {
        title: "Series Trending",
        movies: getMovies(trendingDB, 'series'),
    },
    {
        title: "Rilis Baru",
        movies: getMovies(newDB, 'series'),
    },
]