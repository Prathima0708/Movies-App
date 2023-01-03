// import React from 'react'
// import Meta from '../components/Meta'

// const contact = () => {
//   return (
//     <div className='text-center mt-20'>
//         <Meta title="Contact Us" />
//       <h1 className='text-4xl font-bold'>Contact Us</h1>
//         </div>
//   )
// }

// export default contact

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent";
import CustomPagination from "../components/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&page=${page}`;
  const fetchTrending = async () => {
    const { data } = await axios.get(url);

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div className="pageTitle">
      
      <div className="flex flex-wrap justify-around">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;

// import axios from 'axios'
// import React, { useState } from 'react'
// import TrendingMovie from '../components/TrendingMovie'

// const trending = ({movies}) => {
//   return (
//     <TrendingMovie movies={movies.results} />
//   )
// }

// export default trending

// export async function getStaticProps(){

//   const res=await axios(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&page=1`)
//   const movies=res.data
//   return {
//     props:{
//       movies
//     }
//   }
// }

// import React, { useEffect, useState } from "react";
// import CustomPagination from "../components/CustomPagination";
// import SingleContent from "../components/SingleContent";

// const trending = (initialData) => {
//   const [show, setShow] = useState([]);
//   const [page, setPage] = useState(1);
//   useEffect(() => {
//     setShow(initialData.trendingMovies.results);
//   }, [initialData, page]);
//   return (
//     <div className="flex flex-wrap justify-around">
//       {show.map((c) => (
//         <SingleContent
//           key={c.id}
//           id={c.id}
//           poster={c.poster_path}
//           title={c.title || c.name}
//           date={c.first_air_date || c.release_date}
//           media_type={c.media_type}
//           vote_average={c.vote_average}
//         />
//       ))}

//       <CustomPagination setPage={setPage} />
//     </div>
//   );
// };

// export default trending;

// export async function getServerSideProps(context) {
//   let trendingMovies = await fetch(
//     `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
//   );
//   trendingMovies = await trendingMovies.json();

//   return {
//     props: {
//       trendingMovies: trendingMovies,
//     },
//   };
// }
