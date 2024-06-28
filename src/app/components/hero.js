import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPlayCircle, faClock, faSearch } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('../images/99.png')"}}>
      <div className="h-screen flex flex-col justify-center items-center px-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <button className="bg-red-500 flex items-center hover:bg-red-300 ring-1 ring-black ring-inset text-white font-bold py-2 px-4 sm:py-4 sm:px-5 rounded">
            Watch Now
            <FontAwesomeIcon icon={faPlayCircle} className="ml-2 h-4 w-4 text-green-50" />
          </button>
          <button className="bg-transparent flex items-center hover:bg-red-300 ring-1 ring-orange-700 ring-inset text-white font-bold py-2 px-4 sm:py-4 sm:px-5 rounded">
            Watch Later
            <FontAwesomeIcon icon={faClock} className="ml-2 h-4 w-4 text-green-50" />
          </button>
        </div>
        <div className="w-full gap-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Avatar: The Way of Water</h1>
          </div>
          <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
            <div className="flex gap-2 mb-4 flex-wrap sm:flex-nowrap">
              <span className="bg-gray-50 px-3 py-1 rounded-full">Action</span>
              <span className="bg-gray-50 px-3 py-1 rounded-full">Adventure</span>
              <span className="bg-gray-50 px-3 py-1 rounded-full">Science Fiction</span>
              <span className="flex gap-1 bg-transparent text-white rounded-full items-center">
                <FontAwesomeIcon icon={faPlayCircle} className="h-4 w-4 text-green-50" />
                2022
              </span>
              <span className="flex bg-transparent text-white px-3 py-1 rounded-full">
                3:12:00
              </span>
              <span className="flex bg-transparent text-white px-3 py-1 rounded-full">
                8.5
              </span>
            </div>
          </div>
          <div className="sm:w-[50%] w-full text-sm text-gray-50">
            <p>
              Set more than a decade after the events of the first film, learn
              the story of the Sully family (Jake, Neytiri, and their kids), the
              trouble that follows them, the lengths they go to keep each other
              safe, the battles they fight to stay alive, and the tragedies they
              endure.
            </p>
          </div>
        </div>
        <div>
          {/* Here you can use the `Play` component if correctly imported and defined */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
