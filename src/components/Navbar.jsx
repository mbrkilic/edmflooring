import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { assets } from "../assets/assets";
import clock from "../assets/clock.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className=" justify-center items-center top-0 w-full left-0 right-0 fixed">
        <div className="flex items-center justify-evenly bg-[#f2f2f2] text-gray-500 p-4">
          <p className="flex items-center">
            <img src={clock} alt="" className="w-6 mr-2" />
            Opening Times: Sun - Sat 07:00 - 21:00
          </p>
          <p className="flex items-center">
          <img src={assets.phone} alt="" className="w-6 mr-2" />+905457682493</p>
          <p className="flex items-center">
          <img src={assets.mail} alt="" className="w-6 mr-2" />
            mdburakkilic@gmail.com
          </p>
        </div>
        <div className=" flex justify-evenly items-center text-white p-4 bg-transparent">
          <div className="container flex justify-evenly ">
            <a className="flex items-center justify-center" href="/">
              <img
                src={assets.logo}
                alt=""
                width={"80px"}
              />
              <p className="font-bold text-2xl text-black">EDM Flooring</p>
            </a>

            <div className=" items-center gap-3 hidden lg:flex">
              <ul className="capitalize flex space-x-6 text-lg mr-auto mt-2 text-black font-semibold">
                <li className=" ">
                  <a href="/galery">galeri</a>
                  
                </li>
                <li className="hover:text-pink-600">
                  <a href="/contact">contact</a>
                </li>
                <li className="hover:text-pink-600">
                  <a href="/#features">features</a>
                </li>
                <li className="hover:text-pink-600">
                  <a href="/#signup">sign up</a>
                </li>
              </ul>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden text-3xl justify-center items-center cursor-pointer"
            >
              <HiMenu />
            </button>
            {isMenuOpen && (
              <div className="bg-[#f5f6fb] mt-4 absolute left-0 right-0 top-[50px] flex justify-center items-center ">
                <ul className="flex flex-col lg:flex-row text-lg font-semibold capitalize my-6 mx-auto">
                  <li className=" hover:text-pink-600">
                    <a href="/#about">about</a>
                  </li>
                  <li className="hover:text-pink-600">
                    <a href="/#help">help</a>
                  </li>
                  <li className="hover:text-pink-600">
                    <a href="/#features">features</a>
                  </li>
                  <li className="hover:text-pink-600">
                    <a href="/#signup">sign up</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
