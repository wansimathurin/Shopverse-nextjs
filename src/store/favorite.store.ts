import { create } from 'zustand'
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware'

interface FavoriteState {
    selectedFavoriteIds: number[]
    toggleHeartIcon: (id: number) => void
    clearAll: () => void
}

const noopStorage: StateStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
}

const getSafeStorage = () => {
    if (typeof window === 'undefined') return noopStorage
    try {
        return window.localStorage
    } catch {
        return noopStorage
    }
}

export const useStoreFavorite = create<FavoriteState>()(
    persist(
        (set, get) => ({
            selectedFavoriteIds: [],

            toggleHeartIcon: (id) => {
                const favorites = get().selectedFavoriteIds;

                set({
                    selectedFavoriteIds: favorites.includes(id)
                        ? favorites.filter((favId) => favId !== id)
                        : [...favorites, id],
                });
            },

            clearAll: () => set({ selectedFavoriteIds: [] }),
        }),
        {
            name: 'favorite-store',
            storage: createJSONStorage(getSafeStorage),
        }
    )
);