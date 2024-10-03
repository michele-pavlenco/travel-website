import React from 'react';
import Container from 'react-bootstrap/Container';

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div id='footer'>
            <Container>
                <div className="footer-content d-flex flex-column align-items-center justify-content-between">
                    <div className="footer-brand">
                        <p >Copyright © 2020 Travelo. All rights reserved</p>
                    </div>
                    <div className="footer-links">
                        <a href="#hero">Home</a>
                        <a href="#guarantees">About</a>
                        <a href="#recommended-destinations">Places</a>
                        <a href="#">Careers</a>
                        <a href="#blogs">Blog</a>
                    </div>
                    <div className="footer-social">
                        <FaFacebook />
                        <FaLinkedin />
                        <FaSquareInstagram />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;