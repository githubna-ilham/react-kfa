import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <h1>Welcome to the Dashboard</h1>

      <button onClick={handleLogout}>Logout</button>
      <Link to="/" className="btn btn-primary" style={{ marginLeft: '10px' }}>
        Go to Home
      </Link>
    </>
  );
}

export default Dashboard;
