import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Card from './Components/Card';
import Login from './Components/Login';
import Registration from "./Components/Registration";
import './App.css';
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Card />
          
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
         <Route path="/About" element={<About />} />
      </Routes>
        <Footer />

    </>
  );
}

export default App;