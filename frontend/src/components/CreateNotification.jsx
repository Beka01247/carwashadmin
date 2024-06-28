import React, { useState } from "react";
import MainHeader from "./MainHeader";
import BurgerMenu from "./BurgerMenu";

const CreateNotification = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [expoPushToken, setExpoPushToken] = useState(""); // This needs to be set correctly

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sendMessage = async () => {
    if (!expoPushToken) {
      alert("Expo Push Token is missing. Please set the token.");
      return; // Stop execution if token is not set
    }

    const messageData = {
      to: expoPushToken,
      sound: "default",
      title: "Заголовок",
      body: message,
    };

    console.log("Sending message:", messageData);
    //   try {
    //     const response = await fetch(
    //       "http://localhost:4010/api/admin/send-notification",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(messageData),
    //       }
    //     );
    //     const data = await response.json();
    //     if (response.ok) {
    //       alert("Уведомление отправлено успешно!");
    //     } else {
    //       console.error("Response error:", data);
    //       alert(`Не удалось отправить уведомление: ${data.error}`);
    //     }
    //   } catch (error) {
    //     console.error("Error sending notification:", error);
    //     alert(
    //       "Ошибка при отправке уведомления. Проверьте консоль для подробностей."
    //     );
    //   }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <MainHeader toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="bg-transparent text-white p-6 rounded-lg shadow-lg w-full max-w-md my-auto">
          <h2 className="text-center text-lg font-semibold mb-4">
            Написать PUSH-оповещение
          </h2>
          <div className="mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 text-gray-400 w-full outline-none h-28 bg-gray-800 p-4 rounded-md"
              placeholder="Введите текст уведомления"
            />
          </div>
          <button
            className="bg-[rgba(15,61,243,1)] hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full"
            onClick={sendMessage}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNotification;
