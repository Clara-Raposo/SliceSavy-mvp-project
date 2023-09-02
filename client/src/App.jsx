import "./App.css";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route, Link } from "react-router-dom";
import DetailPizzeria from "./Components/DetailPizzeria.jsx"
import PizzeriasPage from "./Components/PizzeriasPage.jsx"

const App = () => {
 

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PizzeriasPage/>}/>
          <Route path="/pizzerias/:pizzeria_id" element={<DetailPizzeria/>} />
        </Routes>
       </main>
      <Footer />

    
    </div>
  );
};

export default App;