import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Navbar from './Components/Navbar';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/startNewCarrer/Professional Certificates/Certificates";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Login" element={<Login />} />
         
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
