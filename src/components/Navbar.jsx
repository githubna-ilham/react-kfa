import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext.jsx';

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          My Logo 🚀
        </Link>

        <div className="navbar-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Tentang
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Produk
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Kontak
          </NavLink>
        </div>

        <div className="navbar-actions">
          {isAuthenticated ? (
            <div>
              <p>Welcome, {user ? user.name : 'Guest'}</p>
              <button onClick={logout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
