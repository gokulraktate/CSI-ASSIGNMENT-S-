// UserForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countryCityData from './CountryCityData';

const UserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    validate();
  }, [formData]);

  useEffect(() => {
    if (formData.country && countryCityData[formData.country]) {
      setCityOptions(countryCityData[formData.country]);
    } else {
      setCityOptions([]);
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'country' && { city: '' })
    }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = 'Please enter your first name';
    if (!formData.lastName.trim()) errors.lastName = 'Please enter your last name';
    if (!formData.username || formData.username.length < 3) errors.username = 'Username must be at least 3 characters';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.password || formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (!formData.phoneCode || !formData.phoneNumber) errors.phone = 'Enter country code and phone number';
    if (!formData.country) errors.country = 'Please select your country';
    if (!formData.city) errors.city = 'Please select your city';
    if (!formData.pan || formData.pan.length !== 10) errors.pan = 'PAN should be exactly 10 characters';
    if (!/^[0-9]{12}$/.test(formData.aadhar)) errors.aadhar = 'Aadhar must be a 12-digit number';

    setFormErrors(errors);
    setFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      navigate('/submitted', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>📝 User Registration</h2>

      <label>First Name:</label>
      <input name="firstName" value={formData.firstName} onChange={handleChange} />
      <div>{formErrors.firstName && <span style={{ color: 'red' }}>{formErrors.firstName}</span>}</div>

      <label>Last Name:</label>
      <input name="lastName" value={formData.lastName} onChange={handleChange} />
      <div>{formErrors.lastName && <span style={{ color: 'red' }}>{formErrors.lastName}</span>}</div>

      <label>Username:</label>
      <input name="username" value={formData.username} onChange={handleChange} />
      <div>{formErrors.username && <span style={{ color: 'red' }}>{formErrors.username}</span>}</div>

      <label>Email:</label>
      <input name="email" value={formData.email} onChange={handleChange} />
      <div>{formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}</div>

      <label>Password:</label>
      <input
        name="password"
        type={formData.showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange}
      />
      <label>
        <input type="checkbox" name="showPassword" checked={formData.showPassword} onChange={handleChange} /> Show Password
      </label>
      <div>{formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}</div>

      <label>Phone:</label>
      <input name="phoneCode" placeholder="Country Code" value={formData.phoneCode} onChange={handleChange} style={{ width: '100px' }} />
      <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
      <div>{formErrors.phone && <span style={{ color: 'red' }}>{formErrors.phone}</span>}</div>

      <label>Country:</label>
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">-- Select Country --</option>
        {Object.keys(countryCityData).map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <div>{formErrors.country && <span style={{ color: 'red' }}>{formErrors.country}</span>}</div>

      <label>City:</label>
      <select name="city" value={formData.city} onChange={handleChange}>
        <option value="">-- Select City --</option>
        {cityOptions.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <div>{formErrors.city && <span style={{ color: 'red' }}>{formErrors.city}</span>}</div>

      <label>PAN Number:</label>
      <input name="pan" value={formData.pan} onChange={handleChange} />
      <div>{formErrors.pan && <span style={{ color: 'red' }}>{formErrors.pan}</span>}</div>

      <label>Aadhar Number:</label>
      <input name="aadhar" value={formData.aadhar} onChange={handleChange} />
      <div>{formErrors.aadhar && <span style={{ color: 'red' }}>{formErrors.aadhar}</span>}</div>

      <button type="submit" disabled={!formValid} style={{ marginTop: '20px' }}>Submit</button>
    </form>
  );
};


export default UserForm;
