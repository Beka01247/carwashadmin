import React, { useState } from "react";
import MainHeader from "../MainHeader";
import BurgerMenu from "../BurgerMenu";

function Chat() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader toggleMenu={toggleMenu} />
      <div className="flex-grow bg-black"></div>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default Chat;
