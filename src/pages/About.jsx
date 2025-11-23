import { useNavigate } from 'react-router-dom';
import './Pages.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>📚 About React Router</h1>
          <p>
            Learn everything about client-side routing in React applications
          </p>
        </div>

        <div className="card">
          <h2>What is React Router?</h2>
          <p>
            React Router is the standard routing library for React. It enables
            navigation among views of various components in a React Application,
            allows changing the browser URL, and keeps the UI in sync with the
            URL.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3>🎯 Key Features</h3>
            <ul className="concept-list">
              <li>✅ Declarative routing</li>
              <li>✅ Dynamic route matching</li>
              <li>✅ Nested routes</li>
              <li>✅ Route parameters</li>
              <li>✅ Programmatic navigation</li>
              <li>✅ Active link styling</li>
            </ul>
          </div>

          <div className="card">
            <h3>🚀 Benefits</h3>
            <ul className="concept-list">
              <li>✅ Better UX with instant navigation</li>
              <li>✅ SEO-friendly URLs</li>
              <li>✅ Browser history management</li>
              <li>✅ Code splitting per route</li>
              <li>✅ Protected routes</li>
              <li>✅ 404 error handling</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3>🔍 Example: Programmatic Navigation</h3>
          <p>
            Click the button below to navigate programmatically using
            useNavigate hook:
          </p>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => navigate('/products')}
              className="btn btn-primary"
            >
              Go to Products
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-secondary"
              style={{ marginLeft: '12px' }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
