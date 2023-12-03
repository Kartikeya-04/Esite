import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie, { animationData } from 'lottie-react';
import cart from '../assets/cart.json';
import cart2 from '../assets/cart2.json';
import { useState } from 'react';
import Wht from '../assets/whatsapp.svg';
import '../App.css';
// import Image from "next/image";

const Navbar = () => {
  const [active, setactive] = useState(false);
  function changes() {
    console.log(setactive(!active));
  }

  return (
    <div className="navbar flex   bg-black">
      <div
        className="hamburger  flex-col mx-5 my-1 m-20 pb-3 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden relative "
        onClick={changes}
      >
        <div className="line h-1 w-3 bg-white my-1"></div>
        <div className="line h-1 w-3 bg-white my-1"></div>
        <div className="line h-1 w-3 bg-white my-1"></div>
      </div>
      <div className="overr flex-col mx-5 my-10 m-20 absolute   sm:block md:hidden lg:hidden xl:hidden 2xl:hidden bg-black ">
        <div className={active ? 'me' : 'overr'}>
          {/* <Image src="./oglogo.svg" height={40} width={40}></Image> */}

          {/* <img src={Wht} /> */}
          <div className="first  text-blue-600">Hi</div>
          <div className="second  text-blue-600">
            <Link to="/">Home</Link>
          </div>
          <div className="third  text-blue-600 ">
            <Link to="/signup">SignUp</Link>
          </div>
          <div className="fourth  text-blue-600">
            <Link to="/contact">Contact</Link>
          </div>
          <motion.div
            whileTap={{ scale: 4 }}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <Lottie
              className="h-28 w-16 bg-black"
              animationData={cart2}
              loop={true}
            />
          </motion.div>
          {/* <div></div> */}
        </div>
      </div>
      <div className="notham flex justify-evenly items-center hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex  space-x-2 px-10 rounded-sm">
        <div className="first  text-blue-600 p-11 flex justify-center">
          <div>
            <p>Hii</p>
          </div>
          <div className="pl-6">
            <img src={Wht} height="50px" width="50px" />
          </div>
        </div>
        <div className="flex justify-center md:pl-52">
          <div className="second text-blue-600 p-11">
            <Link to="/">Home</Link>
          </div>
          <div className="third text-blue-600 p-11 ">
            <Link to="/signup">SignUp</Link>
          </div>
          <div className="fourth  text-blue-600 p-11">
            <Link to="/contact">Contact</Link>
          </div>
          <motion.div
            whileTap={{ scale: 1.4 }}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <Lottie animationData={cart2} className="h-14 w-28 mt-7"></Lottie>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
