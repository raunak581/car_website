import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          width: '100%',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: 'white',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>MEMBER LOGIN / SIGN UP</h2>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '30px',
            }}
          />
        </div>
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <span>Loading...</span>
          </div>
        ) : (
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default LoginScreen;
