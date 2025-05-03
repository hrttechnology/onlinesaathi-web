import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "../Sathi/Sathi.css"
import Combination from './Combination';
function Saathi() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return (
        <>
            <h1 className='mt-5' style={{
                fontSize: window.innerWidth < 768 ? "34px" : "52px",
                fontWeight: "700",
                width: '100%',
                color: '#000',
                textAlign: 'center'
            }}>
                <span>Saathi</span>
                <span style={{ color: '#0077FF' }}> Network</span>
            </h1>
            <br /><br />

            <div className="container">
                <p style={{ fontSize: window.innerWidth < 768 ? "28px" : "30px", textAlign: 'left' }}>Complementing the Online Saathi tech platform is the Sewa Saathi Network, a dedicated team of <b>on-the-ground agents</b> who provide personalized assistance and support to informal workers. Online Saathi’s network extends across India, empowering local communities through a <b>vast network of Saathis</b>, our trusted representatives who serve as the bridge between Online Saathi and the people we serve.</p>
                
            
                
            </div>
            <Combination />
        </>
    )
}

export default Saathi;

