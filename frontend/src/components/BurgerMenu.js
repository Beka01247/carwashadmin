import { useState } from "react";
import Logo from "../assets/images/logo.jsx";
import { useNavigate } from "react-router-dom";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`flex flex-column fixed inset-y-0 left-0 bg-black w-[437px] z-50 transform ${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } transition-transform duration-300 border-r border-gray-600`}
      >
        <nav className="flex flex-col items-start ml-4 mt-3">
          <NavItem
            className="mb-4 text-white"
            text="Управление пользователями"
            navigateTo={() => navigate("/admin")}
          />
          <NavItem
            className="mb-4 text-white"
            text="Оповещения"
            navigateTo={() => navigate("/admin/notification")}
          />
          <NavItem
            className="mb-4 text-white"
            text="Чат с модерацией"
            navigateTo={() => navigate("/admin/moderation-chat")}
          />
          <NavItem
            className="mb-4 text-white"
            text="Смена пароля"
            navigateTo={() => navigate("/admin/change-password")}
          />
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ text, className, navigateTo }) => {
  return (
    <a
      onClick={navigateTo}
      className={`text-white py-2 px-4 block hover:bg-gray-700 ${className}`}
    >
      {text}
    </a>
  );
};

export default BurgerMenu;
