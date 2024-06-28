import VideoPlayer from "./videoplayer";
import MovieDetails from "./moviedetails";
import Navbar from "../components/navbar";
import Head from "next/head";
import EpisodeList from "./season";
import CommentSection from "./commentsection";
import Movieslike from "./Youmaylike";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <Head></Head>
        <VideoPlayer />
        <MovieDetails title="Inception" />
        <div className=" bg-black text-white justify-between">
          <Head>
            <title>Episode List</title>
          </Head>
          <EpisodeList />
        </div>
        {/* <Season/> */}
        <Movieslike />
        <div className="min-h-screen  flex  justify-between">
          <CommentSection />
        </div>
      </div>
    </>
  );
}
