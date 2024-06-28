import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserControl from "./components/UserControl/UserControl";
import CreateNotification from "./components/CreateNotification";
import AllChats from "./components/ModerationChat/AllChats";
import ChangePassword from "./components/ChangePassword/ChangePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<UserControl />} />
        <Route path="/admin/notification" element={<CreateNotification />} />
        <Route path="/admin/moderation-chat" element={<AllChats />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
