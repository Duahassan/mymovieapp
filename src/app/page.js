import Image from "next/image";
import "./globals.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Newreleasemovies from "./components/newReleaseMovies";
import Newreleaseseries from "./components/newseries";
import Recomandedmovies from "./components/recomanded";
import Careusel from "./components/slider";
import CombinedComponent from "./components/recentlyupload";
import TrendingMovies from "./components/trendingmovies";
// import avaterImage from '../images/99.png';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />

      <CombinedComponent />

      <TrendingMovies />
      <Newreleasemovies />
      <Newreleaseseries />
      <Recomandedmovies />
    </main>
  );
}
