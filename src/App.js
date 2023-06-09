import Welcome from "./pages/Welcome";
import Home from './pages/Home';
import Container from './components/Container';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToastMessages from './components/ToastMessages';
import FootPrintInfo from "./pages/FootPrintInfo";
import LeaderBoard from "./pages/LeaderBoard";
import Profile from "./pages/Profile";
// import SignIn from "./pages/SignIn";

const App = () => {
  return (
<Router>
  <div>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Container><Home /></Container>} />
      <Route path="/foot-print-info" element={<Container><FootPrintInfo /></Container>} />
      <Route path="/leaderboard" element={<Container><LeaderBoard /></Container>} />
      <Route path="/profile" element={<Container><Profile /></Container>} />
    </Routes>
    <ToastMessages />
  </div>
</Router>

  );
};

export default App;