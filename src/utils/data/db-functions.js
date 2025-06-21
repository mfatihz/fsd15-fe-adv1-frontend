import { moviesDB } from './movies-db'
import { heroDB, continueDB, topDB, trendingDB, newDB } from './galleries-db'

export const getMovies = (indexes) => indexes.map(i => moviesDB.find(movie => movie.id === i)).filter(Boolean);

export const heroData = getMovies(heroDB);
export const continueData = getMovies(continueDB);
export const topData = getMovies(topDB);
export const trendingData = getMovies(trendingDB);
export const newData = getMovies(newDB);
