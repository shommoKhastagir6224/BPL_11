import React from "react";
import dollerImg from "../../assets/dollar_1.png";
import logo from "../../assets/logo.png"

const Navbar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto md:p-5 lg:p-2">
      <div className="flex-1">
        <a className="text-xl ">
          <img src={logo} alt="" className="h-15 w-20" />
        </a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          {coin} Coins
          <img src={dollerImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
