import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return(
    <header>
      <h3>TiendaOnline</h3>
      <nav>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/sueter">Sueters</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/abrigos">Abrigos</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/jeans">Jeans</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/calzados">Calzados</NavLink></li>
        </ul>
      </nav>
      <div>
        <CartWidget  />
      </div>
      <div className="toggle"></div>
    </header>
  )
}