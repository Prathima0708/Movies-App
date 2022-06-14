import axios from "axios";
import { server } from "../components/config";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import Genres from "../components/ZustandPractice/components/Genres";
import Movies from "../components/ZustandPractice/components/Movies";

export default function Home({ movies }) {
  return (
    <div>
      <Hero />
      <PopularMovie movies={movies.results} />
      <Genres />
      <Movies />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data;
  return {
    props: {
      movies,
    },
  };
}
