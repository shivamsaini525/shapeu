import { NavLink } from "react-router-dom";
import style from './Header.module.css'
import Nav from "./Nav";

const Header=()=>{
    return(
        <>
            <header className={`${style.navbar}`}>
                <NavLink to="/">
                    <img src='../images/logo3.png' alt="Logo" className={`${style.logo}`}></img>
                </NavLink>
                <Nav />

            </header>
        </>
    );
}
export default Header