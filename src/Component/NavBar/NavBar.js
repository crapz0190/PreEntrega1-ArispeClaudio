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
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/monitores">Monitores</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/teclados">Teclados</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/mouse">Mouse</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive' } to="/category/headset">Headset</NavLink></li>
        </ul>
      </nav>
      <div>
        <CartWidget />
      </div>
      <div className="toggle"></div>
    </header>
  )
}