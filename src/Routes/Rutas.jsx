import { Route, Routes } from "react-router-dom"

import { Home } from "../Home/Home" 
import { Habitaciones } from "../Habitaciones/Habitaciones"
import { Menu } from "../Menu/Menu"
import { Comentarios } from "../Comentarios/Comentarios"
import { Formulario } from "../Formulario/Formulario"
import { Footer } from "../Footer/Footer"

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/reservas" element={<Formulario />} />
        </Routes>
        <Footer></Footer>
        </>
    )
}