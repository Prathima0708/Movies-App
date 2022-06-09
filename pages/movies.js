import axios from "axios";

import React, { useState, useEffect } from "react";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres/Genres";

import { useGenres } from "../components/Genres/store";
import useGenres1 from "../components/Genres/useGenres";

import SingleContent from "../components/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const [genres, setGenres] = useState([]);

  const genres = useGenres((state) => state.genres);
  const selectedGenres = useGenres((state) => state.selectedGenres);

  const setGenres = useGenres((state) => state.setGenres);

  // const useURL = useGenres((state) => state.useURL);
  // const setSelectedGenres = useGenres((state) => state.setSelectedGenres);

  const genreforURL = useGenres1(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

  return (
    <div className="pageTitle">
      Movies
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        // setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      {/* <Genres type="movie"/> */}
      <div className="flex flex-wrap justify-around">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;

// import { Button } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Genres from "../components/Genres/Genres";
// import { useGenres } from "../components/Genres/store";
// import useGenres1 from "../components/Genres/useGenres";
// import SingleContent from "../components/SingleContent";

// export default function Movies() {

//   const [page, setPage] = useState(1);
//   const [numOfPages, setNumOfPages] = useState();
//   const setMovies = useGenres((state) => state.setMovies);
//   const selectedMovies = useGenres((state) => state.selectedMovies);
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const genreforURL = useGenres1(selectedGenres);

//   // useEffect(() => {
//   //   const fetchedMovies = [
//   //     { id: 1, name: "Lost city", type: "action" },
//   //     { id: 2, name: "Hera Pheri", type: "comedy" },
//   //     { id: 3, name: "Dil diya", type: "romance" },
//   //     { id: 4, name: "Pushpa", type: "action" },
//   //     { id: 5, name: "Dhamaal", type: "comedy" },
//   //     { id: 6, name: "O priya", type: "romance" },
//   //   ];
//   //   setMovies(fetchedMovies);
//   // }, []);

//     const fetchMovies = async () => {
//     const { data } = await axios.get(`
//     https://api.themoviedb.org/3/discover/movie?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
//     setMovies(data.results);
//     setNumOfPages(data.total_pages);
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, [page, genreforURL]);

//   return (
//     <>
//    <Genres type="movie" />
//     <div className="flex flex-wrap justify-around">

// {selectedMovies &&
//           selectedMovies.map((c) => (
//             <SingleContent
//               key={c.id}
//               id={c.id}
//               poster={c.poster_path}
//               title={c.title || c.name}
//               date={c.first_air_date || c.release_date}
//               media_type="movie"
//               vote_average={c.vote_average}
//             />
//           ))}
//     </div>
//     </>
//   );
// }
