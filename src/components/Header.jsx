import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'INÍCIO' },
    { path: '/about', label: 'SOBRE' },
    { path: '/download', label: 'DOWNLOAD' },
    { label: 'COMUNIDADE', external: '#' },
    { label: 'SUPORTE', external: '#' },
  ];

  return (
    <header className="steam-header">
      <div className="steam-logo">
        <span>JAILHILL</span>
      </div>
      
      <nav className="steam-nav">
        {navItems.map((item, index) => {
          if (item.external) {
            return (
              <a
                key={index}
                href={item.external}
                className="nav-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            );
          }
          
          return (
            <Link
              key={index}
              to={item.path}
              className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      
      <div className="header-actions">
        <button className="steam-button" style={{ fontSize: '12px', padding: '6px 12px' }}>
          INSTALAR JAILHILL
        </button>
      </div>
    </header>
  );
}

export default Header;
