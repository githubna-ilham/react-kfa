import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="hero">
          <h1>🚀 Welcome to React Router Demo</h1>
          <p className="hero-subtitle">
            Learn React Router v6 with comprehensive examples and best practices
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid features grid-3">
          <div className="card feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Basic Routing</h3>
            <p>
              Navigate between pages using React Router Link and NavLink
              components
            </p>
            <Link to="/about" className="feature-link">
              Go to About →
            </Link>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Dynamic Routes</h3>
            <p>URL parameters and dynamic routing with useParams hook</p>
            <Link to="/products" className="feature-link">
              View Products →
            </Link>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Protected Routes</h3>
            <p>
              Authentication and route protection with ProtectedRoute component
            </p>
            <Link to="/dashboard" className="feature-link">
              Go to Dashboard →
            </Link>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">📱</div>
            <h3>Nested Routing</h3>
            <p>Layouts and nested routes with Outlet component</p>
            <Link to="/blog" className="feature-link">
              Read Blog →
            </Link>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Navigation</h3>
            <p>Programmatic navigation with useNavigate hook</p>
            <Link to="/contact" className="feature-link">
              Contact Us →
            </Link>
          </div>

          <div className="card feature-card">
            <div className="feature-icon">404</div>
            <h3>404 Handling</h3>
            <p>Not found pages and error handling</p>
            <Link to="/this-page-does-not-exist" className="feature-link">
              Test 404 →
            </Link>
          </div>
        </div>

        <div className="info-section">
          <h2>🎓 What You'll Learn</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Core Concepts</h3>
              <ul className="concept-list">
                <li>✅ BrowserRouter setup</li>
                <li>✅ Routes and Route configuration</li>
                <li>✅ Link vs NavLink</li>
                <li>✅ useNavigate for programmatic navigation</li>
                <li>✅ useParams for URL parameters</li>
                <li>✅ useLocation for current location</li>
              </ul>
            </div>

            <div className="card">
              <h3>Advanced Features</h3>
              <ul className="concept-list">
                <li>✅ Nested routes with Outlet</li>
                <li>✅ Layout components</li>
                <li>✅ Protected/Private routes</li>
                <li>✅ 404 Not Found pages</li>
                <li>✅ Redirect with Navigate</li>
                <li>✅ Active link styling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
