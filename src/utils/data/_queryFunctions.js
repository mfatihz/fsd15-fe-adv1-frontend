import { moviesDB } from './_movies-db'

export const getMovies = (indexes, type='all', genre='all') => indexes.map(
    i => moviesDB.find(movie => movie.id === i)
).filter(Boolean).filter(
    mapped => (type ==='' || type ==='all') ? true : mapped.type === type
).filter(
    mapped => (genre ==='' || genre ==='all') ? true : mapped.genres.includes(genre)
);