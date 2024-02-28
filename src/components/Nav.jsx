import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';
const Nav=()=>{

    return(<>
        <nav>
         <div className={`${style.menuIcon}`}>
            <ul className={`${style.navbarList}`}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Abokut</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Servsice</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Conttact</NavLink>
                </li>
            </ul>

         </div>
                
        </nav>

    </>);
}
export default Nav