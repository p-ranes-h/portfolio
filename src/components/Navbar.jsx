import React from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'resume', name: 'Resume' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Brand Name exactly as seen in the image */}
        <div 
          className="brand-logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Portfolio
        </div>

        {/* Exact Nav Text labels from the image */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;