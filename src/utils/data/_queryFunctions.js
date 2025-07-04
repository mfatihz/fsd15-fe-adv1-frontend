import { moviesDB } from './_movies-db'
import { episodesDB } from './_episodes-db'
import { viewHistoriesDB } from './_view-histories-db'

export const getMovies = (indexes, type='all', genre='all') => indexes.map(
    i => moviesDB.find(movie => movie.id === i)
).filter(Boolean).filter(
    mapped => (type ==='' || type ==='all') ? true : mapped.type === type
).filter(
    mapped => (genre ==='' || genre ==='all') ? true : mapped.genres.includes(genre)
);

export const getEpisodes = (parentId) => episodesDB.filter(
    movie => movie.parent === parentId
);

export const getEpisodesAndViewPercentage = (parentId) => {
    const episodes = getEpisodes(parentId);
    episodes.map(
        episode => episode.viewPercentage = viewHistoriesDB.find(v => v.id === episode.id)?.viewPercentage || 0
    )
    return episodes;
}