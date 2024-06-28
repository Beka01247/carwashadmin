import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jsx";
import Eye from "../assets/images/eye.jsx";

function AdminLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    navigate("/admin");
    // event.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:4010/api/admin/login",
    //     {
    //       name: name,
    //       password: password,
    //     },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );

    //   const { token } = response.data;
    //   if (token) {
    //     localStorage.setItem("token", token);
    //     navigate("/admin");
    //   } else {
    //     console.error("Login failed: No token received");
    //   }
    // } catch (error) {
    //   console.error(
    //     "Login failed:",
    //     error.response ? error.response.data : error
    //   );
    // }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute top-3 right-3 text-white mt-4 mr-20">ADMIN</div>
      <div className="bg-black p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <Logo className="w-16 h-16" />
        </div>
        <form className="space-y-4 w-80">
          <div>
            <input
              type="text"
              placeholder="Введите логин"
              className="w-full px-4 py-2 bg-[rgba(61,61,61,1)] text-gray-200 rounded-md focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Введите пароль"
              className="w-full px-4 py-2 bg-[rgba(61,61,61,1)] text-gray-200 rounded-md focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              <Eye />
            </button>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-[rgba(15,61,243,1)] text-white rounded-md focus:outline-none"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
