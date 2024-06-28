import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu";
import MainHeader from "../MainHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Eye from "../../assets/images/eye";

function ChangePassword() {
  const [newLogin, setNewLogin] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = async (event) => {};

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <MainHeader toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="flex flex-col items-center mt-16">
        <div className="font-semibold text-xl text-white mb-20">
          Смена данных
        </div>
        <div className="mt-10 w-full max-w-md">
          <div className="mb-6">
            <input
              className="w-full p-3 bg-[rgba(61,61,61,1)] text-gray-300 rounded-md focus:outline-none"
              placeholder="Введите новый логин"
              value={newLogin}
              onChange={(e) => setNewLogin(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full p-3 bg-[rgba(61,61,61,1)] text-gray-300 rounded-md focus:outline-none"
              type="password"
              placeholder="Введите старый пароль"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <input
              className="w-full p-3 bg-[rgba(61,61,61,1)] text-gray-300 rounded-md focus:outline-none"
              type="password"
              placeholder="Введите новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-4 flex items-center text-gray-400">
              <Eye />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full p-3 = text-white rounded-full focus:outline-none bg-[rgba(15,61,243,1)] hover:bg-blue-500"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
