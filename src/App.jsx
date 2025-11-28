import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/Root Map";
import Home from "./Pages/Home";
import Disclaimer from "./Pages/Guidance";
import Contact from "./Pages/Ask Us";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ToRegOrLog from "./Components/registerLogin/registerOrLogin";
import UserDashboard from "./Pages/UserDashboard";
import HerbalistDashboard from "./Pages/HerbalistDashboard";
import NewRemedy from "./Pages/NewRemedy";

function App() {
  return (
    <>
      <Router>
        <Nav className='p-10' />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/root-map" element={<About />} />
          <Route path="/ask-us" element={<Contact />} />
          <Route path="/guidance" element={<Disclaimer />} />
          <Route path="/herbalist-dashboard" element={<HerbalistDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/register-login" element={<ToRegOrLog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-remedy" element={<NewRemedy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
