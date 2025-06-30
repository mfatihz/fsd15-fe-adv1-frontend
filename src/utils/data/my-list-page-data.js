import { getMovies } from "./_queryFunctions"

export const myList = (ids) => [
    {
        title: "Daftar Saya",
        movies: getMovies(Array.from(ids)),
        galleryType: "myList",
        isWrapped: true,
    },
]