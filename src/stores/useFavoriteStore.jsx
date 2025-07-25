import { create } from "zustand";

const useFavoriteStore = create((set, get) => {
  return {
    favorites: [],
    addToFavorite: (joke) => {
      if (!Boolean(get().favorites.some((j) => j.id === joke.id))) {
        set({
          favorites: [...get().favorites, joke],
        });
      }
    },
    removeFromFavorite: (id) => {
      set({
        favorites: get().favorites.filter((current) => current.id !== id),
      });
    },
  };
});

export { useFavoriteStore };
