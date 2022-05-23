import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres/Genres";
import useGenres from "../components/Genres/useGenres";

import SingleContent from "../components/SingleContent";




const movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL=useGenres(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    // console.log(data)
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);
  return (
    <div className="pageTitle">
      Movies
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
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

export default movies;
