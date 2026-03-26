import React from "react";
import background from "../../../assets/bg-shadow.png";
import logoBannar from "../../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="relative min-h-[50vh] container mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative flex-col z-10 flex items-center justify-center h-full sm:gap-6 md:gap-10 pt-18 pb-10">
        <img src={logoBannar} alt="" />
        <h1 className="text-white text-center sm:text-2xl md:text-4xl font-bold ">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400 sm:text-xl md:text-2xl font-semibold">
          Beyond Boundaries Beyond Limits
        </p>
        <button class="btn btn-wide btn-success sm:text-lg md:text-xl font-semibold">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;
