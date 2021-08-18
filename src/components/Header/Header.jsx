import React from 'react'
import { Link } from 'react-router-dom';
import style from './Header.module.css'

class Header extends React.Component{
    render(){
        console.log(style);
        return(
        <header className={`${style.cabecalho}  flex`}>
                <Link to="/">Logo</Link>
                
                <nav>
                    <Link to="/">Drinks</Link> 
                    <Link to="/contato">Contatos</Link>
                </nav>
        </header>)
    }
}

export default Header;