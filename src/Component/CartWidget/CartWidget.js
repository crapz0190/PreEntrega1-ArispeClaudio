import {Component} from "react";
import './Styles.css';

class CartWidget extends Component {
    render() {
        return ( 
            <header className="cartWidget">
                <h3>Carrito<sup>3</sup></h3>
            </header>
        )
    };
}

export default CartWidget;