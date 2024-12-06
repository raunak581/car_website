import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LoginScreen() {
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateMobileNumber = (value) => {
    const regex = /^\d{10}$/;
    return regex.test(value);
  };

  const checkMobileNumber = async (mobile) => {
    const url = 'http://192.168.1.10:5002/api/auth/check-mobile'; // Replace with your API URL
    setIsLoading(true);

    try {
      const response = await axios.post(url, { mobileNo: mobile }, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        const data = response.data;
        const exists = data.exists || false;

        if (exists) {
          const user = data.user;
          // Save user data to localStorage
          localStorage.setItem('email', user.email || '');
          localStorage.setItem('dob', user.dateOfBirth || '');
          localStorage.setItem('firstname', user.firstName || '');
          localStorage.setItem('lastname', user.lastName || '');
          localStorage.setItem('mobileNo', user.mobileNo || '');
          localStorage.setItem('id', user.id || 0);

          alert("Welcome");
          navigate('/home'); // Navigate to Home screen
        } else {
          navigate('/register', { state: { mobile } }); // Navigate to RegistrationScreen
        }
      } else {
        alert('Error: Unable to check mobile number.');
      }
    } catch (error) {
      alert('Failed to connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateMobileNumber(mobile)) {
      checkMobileNumber(mobile);
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>MEMBER LOGIN / SIGN UP</Title>
        <InputContainer>
          <StyledInput
            type="text"
            placeholder="Phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </InputContainer>
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <StyledButton type="submit">Submit</StyledButton>
        )}
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginScreen;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://thumbs.dreamstime.com/z/fast-car-road-motion-blur-background-d-rendering-304517282.jpg?ct=jpeg") 
    no-repeat center center/cover;
`;

const LoginForm = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
   background: url("https://thumbs.dreamstime.com/z/fast-car-road-motion-blur-background-d-rendering-304517282.jpg?ct=jpeg") 
    no-repeat center center/cover;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:white;
  font-size: 1.5rem;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  outline: none;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;
