import create from "zustand";

export const useGenres = create((set) => ({
  genres: [],
  movies: [],
  selectedGenres: [],
  selectedMovies: [],

  setGenres: (genres) => set(() => ({ genres: genres })),
  setMovies: (movies) =>
    set(() => ({ movies: movies, selectedMovies: movies })),

  addSelectedGenre: (genreId) =>
    set((state) => {
      const selectedGenres = [...state.selectedGenres, genreId];
      return {
        selectedGenres: selectedGenres,
        selectedMovies: getMovies(state.movies, selectedGenres),
      };
    }),

  removeSelectedGenre: (genreId) =>
    set((state) => {
      const selectedGenres = state.selectedGenres.filter((g) => g !== genreId);
      return {
        selectedGenres: selectedGenres,
        selectedMovies: getMovies(state.movies, selectedGenres),
      };
    }),
}));

function getMovies(movies, selectedGenres) {
  return movies.filter((movie) => {
    return selectedGenres.length === 0
      ? true
      : selectedGenres.includes(movie.type);
  });
}