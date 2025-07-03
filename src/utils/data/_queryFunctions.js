import { moviesDB } from './_movies-db'
import { episodesDB } from './_episodes-db'
import { viewHistoriesDB } from './_view-histories-db'

export const getMovies = (indexes, filter='') => indexes.map(
    i => moviesDB.find(movie => movie.id === i)
).filter(Boolean).filter(
    mapped => filter ==='' ? true : mapped.type === filter
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