import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  Alert,
} from '@mui/material';

const RegistrationScreen = ({ mobile }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNo: mobile || '',
    email: '',
    password: '',
    dateOfBirth: null,
    gender: '',
  });

  const [dob, setDob] = useState({ year: '', month: '', day: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDobChange = (e, field) => {
    setDob((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!dob.year || !dob.month || !dob.day || !formData.gender) {
      setError('Please fill all fields including Date of Birth and Gender.');
      return;
    }
  
    setError('');
    const dateOfBirth = `${dob.year}-${dob.month.toString().padStart(2, '0')}-${dob.day.toString().padStart(2, '0')}`;
  
    const payload = {
      ...formData,
      dateOfBirth,
    };
  
    setIsLoading(true);
  
    try {
      const response = await axios.post('http://192.168.1.10:5002/api/auth/registeration', payload, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 201) {
        alert('Registration Successful!');
        navigate('/home');
      } else {
        alert(`Error: ${response.data.msg}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Box
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 3, color: '#3f51b5' }}>
        Member Registration
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name*"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Last Name*"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone*"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          fullWidth
          required
          inputProps={{ pattern: '^\\d{10}$' }}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          type="email"
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password*"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          type="password"
          required
          sx={{ mb: 3 }}
        />

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Date of Birth*
        </Typography>
        <Box display="flex" gap={2} sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select value={dob.year} onChange={(e) => handleDobChange(e, 'year')} required>
              {Array.from({ length: 50 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Month</InputLabel>
            <Select value={dob.month} onChange={(e) => handleDobChange(e, 'month')} required>
              {Array.from({ length: 12 }, (_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Day</InputLabel>
            <Select value={dob.day} onChange={(e) => handleDobChange(e, 'day')} required>
              {Array.from({ length: 31 }, (_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Gender*
        </Typography>
        <RadioGroup
          row
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          sx={{ mb: 3 }}
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
        </RadioGroup>

        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading}
            sx={{ width: '100%', py: 1.5 }}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegistrationScreen;
