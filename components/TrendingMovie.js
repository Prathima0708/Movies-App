// import React from 'react'

// import { TrendingCard } from './TrendingCard'

// const TrendingMovie = ({movies}) => {
//   return (
//     <div className='bg-gray-700 container max-w-7xl mx-auto pb-10 px-4 '>
// <h1 className='text-white text-2xl mt-8 mb-5'>What's Popular</h1>
// <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
// {movies.map(movie => <TrendingCard movie={movie} key={movie.id} />)}
// </div>

//     </div>
//   )
// }

// export default TrendingMovie

import React from "react";
import { img_300, unavailable } from "./config";

const TrendingMovie = ({ title, index, overview, poster }) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";
  return (
    <div key={index}>
      <h3>{title}</h3>
      <img
        className="rounded-lg"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <p>{overview}</p>
    </div>
  );
};

export default TrendingMovie;
