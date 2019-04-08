import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    EXPO
                </div>
                <div className="footer_copyright">
                    PabloDevX &copy; 2019
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;