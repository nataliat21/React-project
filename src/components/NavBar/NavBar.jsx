import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"
import {Link, NavLink} from "react-router-dom"

export const NavBar = () => {
        return (
        <div>
            <div className="NavBarContainer">
            <span>
                <Link to="/inicio">
                <img
                    className="LogoTrendy"
                    src="https://statictrendy.s3.amazonaws.com/wp-content/uploads/2020/12/03234547/trendy_shop_logo.png"
                    alt="LogoTrendy"
                ></img>
                </Link>
            </span>
            <div className="LinksContainer">
                <NavLink exact to="/inicio" className="LinksNavBar" activeClassName="claseActiva">Inicio</NavLink>
                <NavLink exact to="/tiendas" className="LinksNavBar" activeClassName="claseActiva">Tiendas</NavLink>
                <NavLink exact to="/nosotros" className="LinksNavBar" activeClassName="claseActiva">Nosotros</NavLink>
                <NavLink exact to="/haztemayorista" className="LinksNavBar" activeClassName="claseActiva">Hazte Mayorista</NavLink>
            </div>
            <div>
                <Link to="/cart">
                <CartWidget></CartWidget>
                </Link>
            </div>
            </div>
        </div>
        )
    }
