import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Card from './Components/Card';
import Login from './Components/Login';
import Registration from "./Components/Registration";
import './App.css';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Benefits from "./Components/Benefit";
import ExperianceForm from "./Components/ExperianceFrom";
import Profile from "./Components/Profile";
import ExperianceForm2 from "./Components/ExperianceFrom2";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Benefits/>
            <Card />
          
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
         <Route path="/About" element={<About />} />
         <Route path="/ExperianceForm" element={<ExperianceForm />} />
         <Route path="/Profile" element={< Profile/>} />
         <Route path="/ExperianceForm2" element={< ExperianceForm2/>} />
      </Routes>
        <Footer />

    </>
  );
}

export default App;