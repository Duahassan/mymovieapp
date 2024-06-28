"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                Logo
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
                </Link>
                <Link href="/about"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-black text-white border-2 border-white rounded-full px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                    placeholder="Search..."
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Link href="/recent"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Recent
                </Link>
                <Link href="/recommended" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Recommended
                </Link>
                <Link href="/release"  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Release
                </Link>
                <Link href="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white  py-2 rounded-md text-sm font-medium">
                 Sign In
                </Link>
                <Link href="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white  py-2 rounded-md text-sm font-medium">
                 Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about"  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
             Contact
            </Link>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 text-white rounded-md px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <Link href="/recent"  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Recent
            </Link>
            <Link href="/recommended" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Recommended
            </Link>
            <Link href="/release" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Release
            </Link>
            <Link href="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
           Sign In
            </Link>
            <Link href="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell, faSearch, faclose } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import { useState } from "react";
// import TrendingMovies from "./trendingmovies";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <div>
//       <nav className="w-full bg-black fixed top-0 right-0 z-10">
//         <div className="flex justify-between mx-auto items-center">
//           <div className="flex items-center justify-between py-3 ">
//             <div className=" flex space-x-6">
//               <Link href="/" className="text-white">
//                 Home
//               </Link>
//               <Link href="/about" className="text-white">
//                 About
//               </Link>
//               <Link href="/services" className="text-white">
//                 Services
//               </Link>
//             </div>
//           </div>
//           <div className="relative flex justify-between ">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="  flex pl-12 pr-10 py-2 rounded-full text-sm focus:outline-none"
//             />
//             <FontAwesomeIcon
//               icon={faSearch}
//               className="absolute search-icon flex right-0 mt-3 mr-3  h-4 w-4 text-gray-500"
//             />
//           </div>
//           <div className="flex space-x-4">
//             <Link href="/testimonials" className="text-white" T>
//               Testimonials
//             </Link>
//             <Link href="/contact" className="text-white">
//               Contact
//             </Link>
//             <Link href="/contact" className="text-white">
//               Animations
//             </Link>
//           </div>
//           <div className="flex">
//             <div className="inline ">
//               <Link href="/signup" className=" text-white">
//                 Sign In/
//               </Link>
//             </div>
//             <Link href="/signin" className="text-white">
//               Sign Up
//             </Link>
//             <FontAwesomeIcon
//               icon={faBell}
//               className="flex right-0 top-0 mt-1  h-4 w-4 text-white"
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

//           {/* <div className="md:hidden">
//             <button
//               className="p-2 text-white rounded-md outline-none focus:border-gray-400"
//               onClick={() => setNavbar(!navbar)}
//             >
//               {navbar ? (
//                 <FontAwesomeIcon
//                   icon={faclose}
//                   className="fa-regular fa-rectangle-xmark w={30} h-{30}"
//                 />
//               ) : (
//                 <FontAwesomeIcon
//                   icon={faclose}
//                   className="fa-regular fa-rectangle-xmark"
//                 />
//               )}
//             </button>
//           </div> */}


