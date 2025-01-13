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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Menü öğesine tıklandığında menüyü kapat
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
          +90 555 555 55 55
        </p>
        <p className="flex text-xs sm:text-sm items-center sm:flex-wrap">
          <img src={assets.mail} alt="" className="w-4 sm:w-6 mr-2" />
          ornek@email.com
        </p>
      </div>
      <div
        className={`container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 ${
          isHomePage
            ? "bg-transparent"
            : "sm:bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img src={` ${isHomePage ? assets.logoWhite : assets.logo}`} alt="" width={"80px"} />
          <p className={`font-bold text-2xl ${isHomePage ? "text-white" : "text-black"}`}>EDM Flooring</p>
        </Link>

        <div className=" items-center gap-3 hidden lg:flex">
          <ul className={`capitalize flex space-x-6 text-lg mr-auto mt-2 font-semibold ${
          isHomePage ? "text-white" : "text-black"
        } `}>
            <li className="cursor-pointer hover:underline">
              <Link to="/">home</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/gallery">gallery</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className={`lg:hidden text-3xl justify-center items-center cursor-pointer ${
          isHomePage ? "text-white" : "text-black"
        }`}
        >
          <HiMenu />
        </button>
        {isMenuOpen  && (
          <div className="bg-white mt-11 absolute left-0 right-0 top-[50px] flex justify-center items-center">
            <ul className="flex flex-col lg:flex-row text-lg font-semibold capitalize my-6 mx-auto">
              <li onClick={handleMenuItemClick} className="cursor-pointer hover:underline">
                <Link to="/">home</Link>
              </li>
              <li onClick={handleMenuItemClick} className="cursor-pointer hover:underline">
                <Link to="/gallery" className="inline-block">
                  gallery
                </Link>
              </li>
              <li onClick={handleMenuItemClick} className="cursor-pointer hover:underline">
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
