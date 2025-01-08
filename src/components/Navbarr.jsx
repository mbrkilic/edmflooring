import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import clock from "../assets/clock.svg";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

function Navbarr() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex items-center justify-evenly bg-[#f2f2f2] text-gray-500 p-4 gap-2 flex-col sm:flex-row">
        <p className="flex text-xs sm:text-sm items-center sm:flex-wrap">
          <img src={clock} alt="" className="w-4 sm:w-6 mr-2" />
          Opening Times: Sun - Sat 07:00 - 21:00
        </p>
        <p className="flex text-xs sm:text-sm items-center sm:flex-wrap">
          <img src={assets.phone} alt="" className="w-4 sm:w-6 mr-2" />
          +905457682493
        </p>
        <p className="flex text-xs sm:text-sm items-center sm:flex-wrap">
          <img src={assets.mail} alt="" className="w-4 sm:w-6 mr-2" />
          mdburakkilic@gmail.com
        </p>
      </div>
      <div className={`container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 ${ isHomePage
          ? "bg-transparent"
          : "bg-black sm:bg-transparent backdrop-blur-md" }`}>
        <Link to="/" className="flex items-center">
          <img src={assets.logoWhite} alt="" width={"80px"} />
          <p className="font-bold text-2xl text-white">EDM Flooring</p>
        </Link>

        <div className=" items-center gap-3 hidden lg:flex">
          <ul className="capitalize flex space-x-6 text-lg mr-auto mt-2 text-black font-semibold">
            <li className="cursor-pointer hover:underline">
              <Link to="/">home</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/galery">galeri</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl justify-center items-center cursor-pointer text-white"
        >
          <HiMenu />
        </button>
        {isMenuOpen && (
          <div  className="bg-[#f5f6fb] mt-4 absolute left-0 right-0 top-[50px] flex justify-center items-center">
            <ul className="flex flex-col lg:flex-row text-lg font-semibold capitalize my-6 mx-auto">
              <li className="cursor-pointer hover:underline">
                <Link to="/">home</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link to="/galery">galeri</Link>
              </li>
              <li className="cursor-pointer hover:underline">
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbarr;
