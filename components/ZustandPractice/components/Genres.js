import { Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useGenres } from "../store/state";

export default function Genres() {
  const genres = useGenres((state) => state.genres);
  const selectedGenres = useGenres((state) => state.selectedGenres);
  const setGenres = useGenres((state) => state.setGenres);
  const addSelectedGenre = useGenres((state) => state.addSelectedGenre);
  const removeSelectedGenre = useGenres((state) => state.removeSelectedGenre);

  useEffect(() => {
    const genres = [
      { id: 1, type: "action" },
      { id: 2, type: "comedy" },
      { id: 3, type: "romance" },
    ];
    setGenres(genres);
  }, []);



  function handleGenre(type) {
    const isGenrePresent = selectedGenres.find(
      (genreType) => genreType === type
    );

    if (isGenrePresent) {
      removeSelectedGenre(type);
    } else {
      addSelectedGenre(type);
    }
  }

  return (
    <div className="m-8 flex gap-4 justify-center">
      {genres && genres.map((genre) => {
        const isGenrePresent = selectedGenres.find(
          (genreType) => genreType === genre.type
        );

        return (
          <Button
            variant={isGenrePresent ? "contained" : "outlined"}
            key={genre.id}
            onClick={() => handleGenre(genre.type)}
            className="m-4"
          >
            {genre.type}
          </Button>
        );
      })}
    </div>
  );
}