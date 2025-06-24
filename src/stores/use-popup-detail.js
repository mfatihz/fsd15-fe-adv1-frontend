import { create } from 'zustand'

export const usePopupDetail = create(
    (set) => ({
        movieData: null,
        isOpen: false,
        setMovieData: (data) => set({movieData: data}),
        open: () => set({isOpen: true}),
        close: () => set({isOpen: false}),
    })
);