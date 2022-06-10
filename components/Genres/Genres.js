// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Chip from "@mui/material/Chip";

// const Genres = ({
//   selectedGenres,
//   setSelectedGenres,
//   genres,
//   setGenres,
//   type,
//   setPage,
// }) => {
//   const handleAdd = (genre) => {
//     setSelectedGenres([...selectedGenres, genre]);
//     setGenres(genres.filter((g) => g.id !== genre.id));
//     setPage(1);
//   };

//   const handleRemove = (genre) => {
//     setSelectedGenres(
//       selectedGenres.filter((selected) => selected.id !== genre.id)
//     );
//     setGenres([...genres, genre]);
//     setPage(1);
//   };

//   const fetchGenres = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/genre/${type}/list?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`
//     );
//     setGenres(data.genres);
//     console.log(data.genres)
//   };

//   useEffect(() => {
//     fetchGenres();

//     return () => {
//       setGenres([]);
//     };
//   }, []);
//   return (
//     <div style={{ padding: "6px 0" }}>
//       Genres
//       {selectedGenres &&
//         selectedGenres.map((genre) => (
//           <Chip
//             key={genre.id}
//             label={genre.name}
//             style={{ margin: 2 }}
//             size="small"
//             color="primary"
//             clickable
//             onDelete={() => handleRemove(genre)}
//           />
//         ))}
//       {genres &&
//         genres.map((genre) => (
//           <Chip
//             key={genre.id}
//             label={genre.name}
//             style={{ margin: 2 }}
//             size="small"
//             clickable
//             onClick={() => handleAdd(genre)}
//           />
//         ))}
//     </div>
//   );
// };

// export default Genres;





// import { Button } from "@mui/material";
// import axios from "axios";
// import { useEffect } from "react";
// import { useGenres } from "./store";

// export default function Genres({type}) {
//   const genres = useGenres((state) => state.genres);
//   const selectedGenres = useGenres((state) => state.selectedGenres);
//   const setGenres = useGenres((state) => state.setGenres);
//   const addSelectedGenre = useGenres((state) => state.addSelectedGenre);
//   const removeSelectedGenre = useGenres((state) => state.removeSelectedGenre);

//     const fetchGenres = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/genre/${type}/list?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`
//     );
//     setGenres(data.genres);
//     console.log(data.genres)
//   };

//   useEffect(() => {
//     fetchGenres();

//     return () => {
//       setGenres([]);
//     };
//   }, []);

//   function handleGenre(type) {
//     const isGenrePresent = selectedGenres.find(
//       (genreType) => genreType === type
//     );

//     if (isGenrePresent) {
//       removeSelectedGenre(type);
//     } else {
//       addSelectedGenre(type);
//     }
//   }

//   return (
//     <div className="m-8 flex gap-4 justify-center">
//       {genres && genres.map((genre) => {
//         const isGenrePresent = selectedGenres.find(
//           (genreType) => genreType === genre.name
//         );

//         return (
//           <Button
//             variant={isGenrePresent ? "contained" : "outlined"}
//             key={genre.id}
//             onClick={() => handleGenre(genre.name)}
//             className="m-4"
//           >
//             {genre.name}
//           </Button>
//         );
//       })}

//     </div>
//   );
// }






import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import { useGenres } from "./store";

const Genres = ({ type, setPage }) => {
  const genres = useGenres((state) => state.genres);
  const selectedGenres = useGenres((state) => state.selectedGenres);
  const setGenres = useGenres((state) => state.setGenres);
  const addGenres = useGenres((state) => state.addGenres);
  const removeGenres = useGenres((state) => state.removeGenres);
  const setSelectedGenres = useGenres((state) => state.setSelectedGenres);

  const handleAdd = (genre) => {
    addGenres(genre);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    removeGenres(genre);
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`
    );
    setGenres(data.genres);
    console.log(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setSelectedGenres([]);
    };
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      Genres
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            color="primary"
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};
export default Genres;
