import React from "react";
import Bars from "../assets/images/bars.jsx";

const MainHeader = ({ toggleMenu }) => {
  return (
    <header className="flex justify-between items-center bg-black text-white p-4">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 ml-20"
      >
        <Bars />
      </button>
      <div className="flex items-center bebas-neue-regular text-white mr-20">
        ADMIN
      </div>
    </header>
  );
};

export default MainHeader;
