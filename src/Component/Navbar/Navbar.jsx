
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
        <div className="bg-white shadow">
            <div className="container py-0">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <img
                                    src={logo} // Replace with your logo path
                                    style={{ height: isMobile ? '40px' : isTablet ? '45px' : '50px' }}
                                    alt="Online Sathi Logo"
                                />
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <span
                                        style={{
                                            color: '#F80000',
                                            fontSize: isMobile ? '22px' : isTablet ? '28px' : '33px',
                                            fontWeight: '700',
                                        }}
                                    >
                                        Online
                                    </span>
                                    <span
                                        style={{
                                            color: '#0BA811',
                                            fontSize: isMobile ? '22px' : isTablet ? '28px' : '33px',
                                            fontWeight: '700',
                                        }}
                                    >
                                        Sathi
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <div className="d-flex" role="search">
                                <ul
                                    className="navbar-nav me-auto mb-2 mb-lg-0"
                                    style={{
                                        display: 'flex',
                                        alignItems: isMobile || isTablet ? 'flex-start' : 'center',
                                        gap: isMobile || isTablet ? '10px' : '20px',
                                        flexDirection: isMobile || isTablet ? 'column' : 'row',
                                    }}
                                >
                                    <li className="nav-item">
                                        <NavLink
                                            to="/partner"
                                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                            style={{ fontSize: isMobile ? '16px' : '17px', color: '#000000', fontWeight: '600' }}
                                        >
                                            Partner
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/sathi"
                                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                            style={{ fontSize: isMobile ? '16px' : '17px', color: '#000000', fontWeight: '600' }}
                                        >
                                            Saathi
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            to="#"
                                            className="nav-link dropdown-toggle"
                                            role="button"
                                            data-bs-toggle={isMobile || isTablet ? '' : 'dropdown'}
                                            aria-expanded="false"
                                            style={{ fontSize: isMobile ? '16px' : '17px', color: '#000000', fontWeight: '600' }}
                                            onClick={(e) => handleDropdownToggle(e, 'services')}
                                        >
                                            Services
                                        </NavLink>
                                        <ul
                                            className={`dropdown-menu ${(isMobile || isTablet) && expandedDropdown === 'services' ? 'show' : ''}`}
                                        >
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/safe"
                                                    className="nav-link"
                                                    style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}
                                                >
                                                    Safe Jobs Connect
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/social"
                                                    className="nav-link"
                                                    style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}
                                                >
                                                    Social Welfare Schemes
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/community"
                                                    className="nav-link"
                                                    style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}
                                                >
                                                    Our Community
                                                </NavLink>
                                            </li>
                                            <li className="nav-item dropdown-submenu">
                                                <NavLink
                                                    to="#"
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    data-bs-toggle={isMobile || isTablet ? '' : 'dropdown'}
                                                    aria-expanded="false"
                                                    style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                    onClick={(e) => handleDropdownToggle(e, 'community')}
                                                >
                                                    On Demand Services
                                                </NavLink>
                                                <ul
                                                    className={`dropdown-menu ${(isMobile || isTablet) && expandedDropdown === 'community' ? 'show' : ''}`}
                                                >
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/micro-atm"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Micro ATM
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/pan-card"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Pan Card Center
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/travel"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Travel
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/community"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Insurance
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/bill-payment"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Bill Payment
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/neo-banking"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Neo Banking
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            to="/sathi"
                                                            className="nav-link"
                                                            style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}
                                                        >
                                                            Indo-Nepal Remittance
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/tech"
                                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                            style={{ fontSize: isMobile ? '16px' : '17px', color: '#000000', fontWeight: '600' }}
                                        >
                                            Technology
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                            style={{ fontSize: isMobile ? '16px' : '17px', color: '#000000', fontWeight: '600' }}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mb-4 mt-3">
                                        <div
                                            className="login-button"
                                            style={{
                                                background: '#0077FF',
                                                gap: '8px',
                                                height: isMobile ? '38px' : isTablet ? '42px' : '48px',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                width: isMobile ? '100px' : isTablet ? '120px' : '130px',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <NavLink
                                                to="/login"
                                                style={{
                                                    fontWeight: '700',
                                                    fontSize: isMobile ? '15px' : isTablet ? '16px' : '17px',
                                                    color: '#FFFFFF',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Login
                                            </NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;