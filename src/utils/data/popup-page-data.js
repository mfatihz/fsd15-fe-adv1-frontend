import { getEpisodesAndViewPercentage, getMovies } from "./_queryFunctions"
import { recommendationDB } from './_galleries-db'

export const recommendationGalleriesData = [
    {
        title: "Rekomendasi Serupa",
        galleryType: "recommendation",
        movies: getMovies(recommendationDB),
    },
]

export const seriesEpisodeGalleriesData = (id) => {
    const episodes = getEpisodesAndViewPercentage(id)
    return {
        title: "Episode",
        movies: episodes,
    }
}