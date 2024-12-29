// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <p>Miami, FL, USA</p>
            <p>+1 (555) 123-4567</p>
            <p>info@boystoymiami.com</p>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  background: #111;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export default Footer;
