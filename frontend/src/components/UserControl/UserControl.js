import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu";
import UserCard from "./UserCard";
import MainHeader from "../MainHeader";

function UserControl() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const users = [
    {
      photo: "https://picsum.photos/200",
      id: "12345",
      name: "John",
      surname: "Doe",
      phone: "123-456-7890",
      email: "johndoe@example.com",
    },
    {
      photo: "https://picsum.photos/200",
      id: "67890",
      name: "Jane",
      surname: "Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
    },
    {
      photo: "https://picsum.photos/200",
      id: "67890",
      name: "Jane",
      surname: "Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
    },
    {
      photo: "https://picsum.photos/200",
      id: "67890",
      name: "Jane",
      surname: "Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
    },
    {
      photo: "https://picsum.photos/200",
      id: "67890",
      name: "Jane",
      surname: "Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
    },

    // Add more user objects as needed
  ];

  return (
    <div className="bg-black min-h-screen">
      <MainHeader toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="text-white text-center text-2xl mt-8">
        Управление пользователями
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-3">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserControl;
