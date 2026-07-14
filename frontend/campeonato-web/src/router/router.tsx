import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import Jogos from "../pages/Jogos/Jogos";
import Times from "../pages/Times/Times";
import Torneios from "../pages/Torneios/Torneios";
import Partidas from "../pages/Partidas/Partidas";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jogos" element={<Jogos />} />
                <Route path="/times" element={<Times />} />
                <Route path="/torneios" element={<Torneios />} />
                <Route path="/partidas" element={<Partidas />} />
            </Routes>
        </BrowserRouter>
    );
}