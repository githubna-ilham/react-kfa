import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
