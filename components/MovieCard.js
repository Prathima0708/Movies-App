import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const MovieCard = ({ movie }) => {
  return (
    // <motion.div
    //   whileHover={{
    //     position: "relative",
    //     zIndex: 1,
    //     //   background: "white",
    //     // scale: [1, 1.4, 1.5],
    //     transition: {
    //       duration: 0.2,
    //     },
    //   }}
    // >
    <Link href={`/movie/${movie.id}`}>
      <motion.div
        className="bg-white shadow-sm rounded-md cursor-pointer"
        initial="pageInitial"
        exit="pageExit"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt="poster"
        />
        <div className="px-6 py-2">
          <div className="font-bold mb-1 text-xl">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </motion.div>
    </Link>
    // </motion.div>
  );
};
