import {Component} from "react";
import './Styles.css';

class NavBar extends Component {
    render() {
        return ( 
            <header>
                <h3>TiendaOnline</h3>
                <div className="toggle"></div> 
                <nav>
                    <a href="#" >Nuestras Ofertas</a>
                    <a href="#" >Descuentos</a>
                    <a href="#" >Sucursales</a>
                </nav> 
            </header>
        )
    };
}

export default NavBar;