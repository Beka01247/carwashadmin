import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg border border-[rgba(61,61,61,1)]">
      <div className="flex mb-4">
        <img
          src={user.photo || "https://via.placeholder.com/100"}
          alt={`${user.name}'s photo`}
          className="rounded-lg w-[100px] h-[100px] mr-4"
        />
        <div className="flex flex-row">
          <div>
            <p className="flex items-center text-gray-400">ID</p>
            <p className="flex items-center text-gray-400">Имя</p>
            <p className="flex items-center text-gray-400">Фамилия</p>
            <p className="flex items-center text-gray-400">Номер</p>
            <p className="flex items-center text-gray-400">Email</p>
          </div>
        </div>
        <div className="ml-5">
          <p className="flex items-center text-gray-400">
            <span className="text-white ml-2">{user.id}</span>
          </p>
          <p className="flex items-center text-gray-400">
            <span className="text-white ml-2">{user.name}</span>
          </p>
          <p className="flex items-center text-gray-400">
            <span className="text-white ml-2">{user.surname}</span>
          </p>
          <p className="flex items-center text-gray-400">
            <span className="text-white ml-2">{user.phone}</span>
          </p>
          <p className="flex items-center text-gray-400">
            <span className="text-white ml-2">{user.email}</span>
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <button
          className="w-full px-4 py-2 bg-[rgba(15,61,243,1)] text-white rounded-md focus:outline-none"
          onClick={() => navigate("/admin/user-control/activity")}
        >
          Посмотреть профиль
        </button>
        <button className="w-full px-4 py-2 border border-red-600 text-white rounded-md focus:outline-none">
          Заблокировать
        </button>
      </div>
    </div>
  );
};

export default UserCard;
