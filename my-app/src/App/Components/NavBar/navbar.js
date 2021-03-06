import React from 'react';
import "./navbar.scss";
import {Link} from 'react-router-dom';
import logo from "./—Pngtree—hand drawn kayaking kids characters_4076228.png";
// import API from "../../Components/API/api";
/*<a href='https://pngtree.com/so/element ai'>element ai png from pngtree.com</a>*/



class Navbar extends React.Component {
    render() {
        return<header className="header">
            <div className="container">
               <img src={logo} alt="Kayak"/>
                <nav className="header__nav">
                    <ul className="header__nav__list">
                        <Link to="/">Strona główna</Link>
                        <a href="#riverDescritpionId">Opis rzeki</a>
                        <a href="#sliderId">Galeria</a>
                </ul>
            </nav>

        </div>


    </header>



    }
}

export default Navbar;