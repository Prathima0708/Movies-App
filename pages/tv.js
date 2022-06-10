// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import useGenres from "../components/Genres/useGenres";
// import Genres from "../components/Genres/Genres";
// import CustomPagination from "../components/CustomPagination";
// import SingleContent from "../components/SingleContent";

// const Tv = () => {
//   const [page, setPage] = useState(1);
//   const [content, setContent] = useState([]);
//   const [numOfPages, setNumOfPages] = useState();
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const genreforURL = useGenres(selectedGenres);

//   const fetchMovies = async () => {
//     const { data } = await axios.get(`
//     https://api.themoviedb.org/3/discover/tv?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
//     setContent(data.results);
//     setNumOfPages(data.total_pages);
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, [page, genreforURL]);

//   return (
//     <div className="pageTitle">
//       TV Series
//       <Genres
//         type="tv"
//         selectedGenres={selectedGenres}
//         setSelectedGenres={setSelectedGenres}
//         genres={genres}
//         setGenres={setGenres}
//         setPage={setPage}
//       />
//       <div className="flex flex-wrap justify-around">
//         {content &&
//           content.map((c) => (
//             <SingleContent
//               key={c.id}
//               id={c.id}
//               poster={c.poster_path}
//               title={c.title || c.name}
//               date={c.first_air_date || c.release_date}
//               media_type="tv"
//               vote_average={c.vote_average}
//             />
//           ))}
//       </div>
//       <CustomPagination setPage={setPage} />
//     </div>
//   );
// };

// export default Tv;






import axios from "axios";

import React, { useState, useEffect } from "react";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres/Genres";

import { useGenres } from "../components/Genres/store";
import useGenres1 from "../components/Genres/useGenres";

import SingleContent from "../components/SingleContent";

const TV = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  // const [selectedGenres, setSelectedGenres] = useState([]);
  // const [genres, setGenres] = useState([]);

  const genres = useGenres((state) => state.genres);
  const selectedGenres = useGenres((state) => state.selectedGenres);

  const setGenres = useGenres((state) => state.setGenres);

  // const useURL = useGenres((state) => state.useURL);
  const setSelectedGenres = useGenres((state) => state.setSelectedGenres);

  const genreforURL = useGenres1(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/tv?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
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
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
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
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default TV;


