import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Brazzar</h1>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">Início</li>
          <li className="header__menu-item">Categorias</li>
          <li className="header__menu-item">Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
