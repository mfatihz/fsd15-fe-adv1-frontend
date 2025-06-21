import { heroData, continueData, topData, trendingData, newData } from "./db-functions"

export const movieHero = heroData

export const movieGalleries = [
    {
        title: "Melanjutkan Tonton Film",
        galleryType: "continue",
        movies: continueData,
    },
    {
        title: "Top Rating Film dan Series Hari ini",
        movies: topData,
    },
    {
        title: "Film Trending",
        movies: trendingData,
    },
    {
        title: "Rilis Baru",
        movies: newData,
    },
]