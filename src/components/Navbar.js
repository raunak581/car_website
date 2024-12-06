// src/components/Navbar.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data (e.g., token)

    localStorage.removeItem('email');
    localStorage.removeItem('dob');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('mobileNo');
    localStorage.removeItem('id'); // Adjust the key based on your app
    
    navigate("/"); // Redirect to the login page
  };

  return (
    <Nav>
      <Logo>BoysToys</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Cars</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <RightSection>
        <ContactButton>Contact No:-  8779269243</ContactButton>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </RightSection>
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactButton = styled.button`
  background: orange;
   border-radius: 8px;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  background: red;
  border: none;
  padding: 0.5rem 1rem;
   border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: darkred;
  }
`;

export default Navbar;
