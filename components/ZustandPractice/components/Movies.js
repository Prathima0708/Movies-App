import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useGenres } from "../store/state";

export default function Movies() {
  //   const selectedGenres = useGenres((state) => state.selectedGenres);
  //   const [movies, setMovies] = useState([]);
  const setMovies = useGenres((state) => state.setMovies);
  const selectedMovies = useGenres((state) => state.selectedMovies);

  useEffect(() => {
    const fetchedMovies = [
      { id: 1, name: "Lost city", type: "action" },
      { id: 2, name: "Hera Pheri", type: "comedy" },
      { id: 3, name: "Dil diya", type: "romance" },
      { id: 4, name: "Pushpa", type: "action" },
      { id: 5, name: "Dhamaal", type: "comedy" },
      { id: 6, name: "O priya", type: "romance" },
    ];
    setMovies(fetchedMovies);
  }, []);

  return (
    <div className="m-8 flex gap-4 justify-center">
      {
        /* {movies
        .filter((movie) => {
          return selectedGenres.length === 0
            ? true
            : selectedGenres.includes(movie.type);
        }) */
        selectedMovies.map((movie) => {
          return (
            <div key={movie.id} className="m-4 border-black">
              {movie.name}
            </div>
          );
        })
      }
    </div>
  );
}