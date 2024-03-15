import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [loginComplete, setLoginComplete] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    // Basic validation
    const errors = {};

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

    if (Object.keys(errors).length === 0) {
      setLoginComplete(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
    <Header/>
    <div className="registration-form">
      <h1 className="text-3xl font-bold mb-4 text-center">LOGIN</h1>

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

      <div className="text-center">
        {loginComplete ? (
          <p className="registration-complete">Login Successful!</p>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
    </>
  );
};

export default Login;
