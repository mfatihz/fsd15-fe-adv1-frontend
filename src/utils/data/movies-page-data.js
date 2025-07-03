import { getMovies } from "./_queryFunctions"
import { moviesHeroDB, continueDB, presentDB, topDB, trendingDB, newDB } from './_galleries-db'

export const movieHero = getMovies(moviesHeroDB);

export const movieGalleries = [
    {
            title: "Melanjutkan Tonton Film",
            galleryType: "continue",
            movies: getMovies(continueDB, 'movie'),
        },
        {
            title: "Film Persembahan Chill",
            movies: getMovies(presentDB, 'movie'),
        },
        {
            title: "Top Rating Film Hari Ini",
            movies: getMovies(topDB, 'movie'),
        },
        {
            title: "Film Trending",
            movies: getMovies(trendingDB, 'movie'),
        },
        {
            title: "Rilis Baru",
            movies: getMovies(newDB, 'movie'),
        },
]