import { create } from "zustand";

const useJokeStore = create((set, get) => {
  return {
    jokes: [],
    loading: false,
    moreLoading: false,
    fetchJokes: async () => {
      set({ loading: true });
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_ten"
      );
      const result = await response.json();
      set({ jokes: result, loading: false });
    },
    loadMore: async () => {
      set({ moreLoading: true });
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_ten"
      );
      const result = await response.json();
      set({ jokes: [...get().jokes, ...result], moreLoading: false });
    },
  };
});

export { useJokeStore };
