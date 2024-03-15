import React, { useState } from 'react';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Registration = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    // Basic validation
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!department.trim()) {
      errors.department = 'Department is required';
    }

    if (!mail.trim()) {
      errors.mail = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(mail)) {
      errors.mail = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      setRegistrationComplete(true)
      navigate('/login');
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
    <Header/>
    <div className="registration-form">
      <h1 className="text-3xl font-bold mb-4 text-center">SIGN UP</h1>

      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {errors.firstName && <p className="error-message">{errors.firstName}</p>}

      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {errors.lastName && <p className="error-message">{errors.lastName}</p>}

      <label>Department:</label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      {errors.department && <p className="error-message">{errors.department}</p>}

      <label>Email:</label>
      <input
        type="email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      {errors.mail && <p className="error-message">{errors.mail}</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className="error-message">{errors.password}</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errors.confirmPassword && (
        <p className="error-message">{errors.confirmPassword}</p>
      )}

      <div className="text-center">
        {registrationComplete ? (
          <p className="registration-complete">Registration Complete!</p>
        ) : (
          <button onClick={handleRegister}>Register</button>
        )}
      </div>
    </div>
    </>
  );
};

export default Registration;
