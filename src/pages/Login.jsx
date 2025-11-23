import './Pages.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    const result = login(formData.username, formData.password);

    if (result) {
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }

    // if (formData.username === 'admin' && formData.password === '123456') {
    //   navigate('/dashboard');
    // } else {
    //   alert('Invalid username or password');
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>

        <div className="login-hint">
          <p>
            <strong>Demo Login:</strong>
          </p>
          <p>Enter any username and password to login!</p>
          <p style={{ marginTop: '8px', fontSize: '13px' }}>
            Try: username: <strong>admin</strong>, password:{' '}
            <strong>123456</strong>
          </p>
        </div>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
