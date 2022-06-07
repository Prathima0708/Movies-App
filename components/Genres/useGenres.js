// const useGenres = (selectedGenres) => {
//   if (selectedGenres.length < 1) return "";
//   const GenreIds = selectedGenres && Array.isArray(selectedGenres) && selectedGenres.map((g) => g.id);
//   return GenreIds && GenreIds.reduce((acc, curr) => acc + "," + curr);
// };

// export default useGenres;





const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";
  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenres;

