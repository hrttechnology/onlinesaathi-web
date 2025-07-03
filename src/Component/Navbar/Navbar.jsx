
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the external CSS file with the original styles
import logo from "../Navbar/logo.png";
function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const [expandedDropdown, setExpandedDropdown] = useState(null);

    const handleDropdownToggle = (e, dropdownName) => {
        if (isMobile || isTablet) {
            e.preventDefault();
            e.stopPropagation();
            setExpandedDropdown(expandedDropdown === dropdownName ? null : dropdownName);
        }
    };

    const collapseNavbar = () => {
        const navbar = document.getElementById('navbarSupportedContent');
        if (navbar && navbar.classList.contains('show')) {
            const bsCollapse =  window.bootstrap.Collapse(navbar, {
                toggle: true,
            });
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMobile || isTablet) {
                if (!e.target.closest('.dropdown-submenu') && !e.target.closest('.dropdown-toggle')) {
                    setExpandedDropdown(null);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobile, isTablet]);

    return (
        <div className="bg-white shadow-sm fixed-top border">
            <div className="container py-1">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <img
                                    src={logo}
                                    style={{ height: isMobile ? '30px' : isTablet ? '35px' : '40px' }}
                                    alt="Online Sathi Logo"
                                />
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <span style={{ color: '#F80000', fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px', fontWeight: '700' }}>Online</span>
                                    <span style={{ color: '#0BA811', fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px', fontWeight: '700' }}>Sathi</span>
                                </div>
                            </div>
                        </NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto d-flex align-items-center gap-3 flex-column flex-lg-row">
                                 <li className="nav-item">
                                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: '15px', color: '#000', fontWeight: '600' }}  onClick={collapseNavbar}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/partner" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: '15px', color: '#000', fontWeight: '600' }}  onClick={collapseNavbar}>Partner</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/sathi" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: '15px', color: '#000', fontWeight: '600' }} onClick={collapseNavbar}>Saathi</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to="#" className="nav-link dropdwn-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" style={{ fontSize: '15px', color: '#000', fontWeight: '600' }} onClick={collapseNavbar}>Services</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/safe" className="dropdown-item" onClick={collapseNavbar}>Safe Jobs Connect</NavLink></li>
                                        <li><NavLink to="/social" className="dropdown-item"  onClick={collapseNavbar}>Social Welfare Schemes</NavLink></li>
                                        <li><NavLink to="/community" className="dropdown-item"  onClick={collapseNavbar}>Our Community</NavLink></li>
                                        <li className="dropdown-submenu position-relative">
                                            <NavLink to="#" className="dropdown-item dropdown-toggle" onClick={(e) => handleDropdownToggle(e, 'community')} >On Demand Services</NavLink>
                                            <ul className={`dropdown-menu ${expandedDropdown === 'community' ? 'show' : ''}`}>
                                                <li><NavLink to="/micro-atm" className="dropdown-item" onClick={collapseNavbar}>Micro ATM</NavLink></li>
                                                <li><NavLink to="/pan-card" className="dropdown-item" onClick={collapseNavbar}>Pan Card Center</NavLink></li>
                                                <li><NavLink to="/travel" className="dropdown-item" onClick={collapseNavbar}>Travel</NavLink></li>
                                                <li><NavLink to="/community" className="dropdown-item" onClick={collapseNavbar}>Insurance</NavLink></li>
                                                <li><NavLink to="/bill-payment" className="dropdown-item" onClick={collapseNavbar}>Bill Payment</NavLink></li>
                                                <li><NavLink to="/neo-banking" className="dropdown-item" onClick={collapseNavbar}>Neo Banking</NavLink></li>
                                                <li><NavLink to="/sathi" className="dropdown-item" onClick={collapseNavbar}>Indo-Nepal Remittance</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/tech" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: '15px', color: '#000', fontWeight: '600' }} onClick={collapseNavbar}>Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ fontSize: '15px', color: '#000', fontWeight: '600' }} onClick={collapseNavbar}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <div className="login-button d-flex align-items-center justify-content-center" style={{ background: '#0077FF', height: '36px', width: '110px', borderRadius: '8px' }}>
                                        <NavLink to="/admin.onlinesaathi.org" target='_blank' style={{ color: '#fff', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>Login</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;