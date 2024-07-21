import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import About from "./pages/About";
import Examples from "./pages/Examples";
import Home from "./pages/Home";
import LoggedIn from "./pages/LoggedIn";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPages";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="examples" element={<Examples />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="loggedIn" element={<LoggedIn />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
