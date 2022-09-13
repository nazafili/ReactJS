import './styles.css';
import logogabriela from './logogabriela.jpg';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div>
                        <Link to="/">
                            <img width={'70px'} src={logogabriela} alt="logo" />
                        </Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/category">Categoria</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/contacto">Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/productos/chocolate">Chocolate</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/productos/limon">Limon</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/cart">                           
                <div className='CartWidget'>
                    <CartWidget />
                </div>
                </Link>
            </div>
        </>
    )
}

export default NavBar;