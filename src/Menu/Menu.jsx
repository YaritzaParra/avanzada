import { Link } from 'react-router-dom';
import './Menu.css'

export function Menu() {
  return (
    <>
  <label for="btn-nav" class="btn-nav"><i class="fas fa-bars"></i></label>
  <input type="checkbox" id="btn-nav"/>
  
  <nav>
    <ul className="navigation">
    <li className="nav-item menu"><Link className="nav-link active" aria-current="page" to="/">Inicio</Link></li>
      <li className="nav-item menu"><Link className="nav-link active" aria-current="page" to="/habitaciones">Habitaciones</Link></li>
      <li className="nav-item menu"><Link className="nav-link active" aria-current="page" to="/reservas">Reservas</Link></li>
      <li className="nav-item menu"><Link className="nav-link active" aria-current="page" to="/comentarios">Comentarios</Link></li>
    </ul>
  </nav>
    </>
  );
}