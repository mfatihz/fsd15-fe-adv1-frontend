import { create } from 'zustand'

export const usePopupDetailStore = create(
    (set) => ({
        movieData: null,
        isOpen: false,
        setMovieData: (data) => set({movieData: data}),
        open: () => set({isOpen: true}),
        close: () => set({isOpen: false}),
    })
);