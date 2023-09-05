import React from "react";

const Navbar = () => {
  return (
    <div className=" lg:flex md:flex flex-wrap justify-between items-center px-5 py-5 bg-[#40407a] sticky ">
      <div className="flex items-center space-x-3 justify-center">
        <img
          className="h-10"
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          alt="logo"
        />
        <h1 className="font-bold text-2xl text-white">MovieMasala</h1>
      </div>
      <div>
        <ul className="flex space-x-5 text-white text-xl justify-center ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
