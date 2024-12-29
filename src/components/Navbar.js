// src/components/Navbar.js
import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Nav>
            <Logo>BoysToys</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Cars</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
            <ContactButton>8779269243</ContactButton>
        </Nav>
    );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: black;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const ContactButton = styled.button`
  background: orange;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default Navbar;
