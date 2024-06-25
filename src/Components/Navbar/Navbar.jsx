import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Components/Navbar/Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [menu, setMenu] = useState("main");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
        <div className="nav-logo">
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
        </div>
        <button className="nav-toggle" onClick={toggleMenu}>
            ☰
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("main")} className={menu === "main" ? "active" : ""}>
                    {menu === "main" && <hr className="menu-divider" />}
                    <Link to="/" style={{ textDecoration: 'none' }}>MAIN</Link>
                    {menu === "main" && <hr className="menu-divider" />}
                </li>
                <li onClick={() => handleMenuClick("gallery")} className={menu === "gallery" ? "active" : ""}>
                    {menu === "gallery" && <hr className="menu-divider" />}
                    <Link to="/gallery" style={{ textDecoration: 'none' }}>GALLERY</Link>
                    {menu === "gallery" && <hr className="menu-divider" />}
                </li>
                <li onClick={() => handleMenuClick("project")} className={menu === "project" ? "active" : ""}>
                    {menu === "project" && <hr className="menu-divider" />}
                    <Link to="/project" style={{ textDecoration: 'none' }}>PROJECTS</Link>
                    {menu === "project" && <hr className="menu-divider" />}
                </li>
                <li onClick={() => handleMenuClick("certification")} className={menu === "certification" ? "active" : ""}>
                    {menu === "certification" && <hr className="menu-divider" />}
                    <Link to="/certification" style={{ textDecoration: 'none' }}>CERTIFICATIONS</Link>
                    {menu === "certification" && <hr className="menu-divider" />}
                </li>
                <li onClick={() => handleMenuClick("contact")} className={menu === "contact" ? "active" : ""}>
                    {menu === "contact" && <hr className="menu-divider" />}
                    <Link to="/contact" style={{ textDecoration: 'none' }}>CONTACTS</Link>
                    {menu === "contact" && <hr className="menu-divider" />}
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;
