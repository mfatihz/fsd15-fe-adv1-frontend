import { create } from 'zustand'

export const usePopupDetail = create(
    (set) => ({
        movieData: null,
        setMovieData: (data) => set({movieData: data}),
        //id: null,
        isOpen: false,
        //setId: (newId) => set({id: newId}),
        //toggleOpen: () => set((state) => ({ isOpen: !state.isOpen})),
        open: () => set({isOpen: true}),
        close: () => set({isOpen: false}),
    })
);