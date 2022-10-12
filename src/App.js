import "./styles.css";

import {BrowserRouter, Routes, Route } from "react-router-dom"

import NavigationBar from "./Components/Navbar"
import Home from "./Views/Home"
import Pokemones from "./Views/Pokemones";
import Detalles from "./Views/Detalles";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route end path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />}/>
          <Route path="/pokemones/:name" element={<Detalles />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
