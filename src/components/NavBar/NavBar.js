import './styles.css';
import logogabriela from './logogabriela.jpg';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div>
                    <img width={'70px'} src={logogabriela} alt="logo" />
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#" target="_blank">Inicio</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Tortas</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Nosotros</a>
                        </li>
                    </ul>
                </div>
                <div className='CartWidget'>
                    <CartWidget />
                </div>
            </div>
        </>
    )
}

export default NavBar;