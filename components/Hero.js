import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const links = [
  {
    href: "/trending",
    label: "Trending",
  },
  {
    href: "/movies",
    label: "Movies",
  },
  {
    href: "/search",
    label: "Search",
  },
  {
    href: "/tv",
    label: "TV Series",
  },
];

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={"/undraw_home_cinema_l7yl.png"}
          width={200}
          height={200}
          layout="responsive"
          alt="welcome"
        />
      </div>
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <h1 className="text-2xl text-gray-700 uppercase font-bold">
          Welcome to TMDB
        </h1>
      </motion.div>

      <p className="text-gray-500">
        Produce FILM feature , TELEVISION and Game
      </p>

      {links.map(({ href, label }) => (
        <Link href={href} key={label}>
          <button className="bg-gray-700 text-sm text-white px-6 py-3 rounded mt-3 ml-3">
            {label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Hero;
