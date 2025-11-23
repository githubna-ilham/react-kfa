import { Link } from 'react-router-dom';
import './Pages.css';

const productsData = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: '$1,299',
    emoji: '💻',
    description: 'High-performance laptop for professionals',
  },
  {
    id: 2,
    name: 'Smartphone X',
    price: '$899',
    emoji: '📱',
    description: 'Latest smartphone with amazing features',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: '$299',
    emoji: '🎧',
    description: 'Premium sound quality headphones',
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: '$399',
    emoji: '⌚',
    description: 'Track your fitness and stay connected',
  },
  {
    id: 5,
    name: 'Tablet Plus',
    price: '$699',
    emoji: '📱',
    description: 'Perfect for work and entertainment',
  },
  {
    id: 6,
    name: 'Camera Pro',
    price: '$1,499',
    emoji: '📷',
    description: 'Professional camera for photographers',
  },
];

function Products() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>🛍️ Our Products</h1>
          <p>Explore our amazing product collection</p>
        </div>

        <div className="products-grid">
          {productsData.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="card product-card"
            >
              <div className="product-image">{product.emoji}</div>
              <h3>{product.name}</h3>
              <div className="product-price">{product.price}</div>
              <p>{product.description}</p>
              <span className="feature-link">View Details →</span>
            </Link>
          ))}
        </div>

        <div className="card">
          <h3>💡 Route Example</h3>
          <p>
            This page demonstrates <strong>basic routing</strong> with Link
            components. Click on any product to see{' '}
            <strong>dynamic routing</strong> with URL parameters!
          </p>
          <p style={{ marginTop: '12px', color: '#6b7280', fontSize: '14px' }}>
            Current route: <code>/products</code>
            <br />
            Product detail route: <code>/products/:productId</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
