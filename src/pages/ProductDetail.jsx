import { useParams, useNavigate, Link } from 'react-router-dom';
import './Pages.css';

const productsData = {
  1: {
    id: 1,
    name: 'Laptop Pro',
    price: '$1,299',
    emoji: '💻',
    description: 'High-performance laptop for professionals',
    specs: ['Intel i7 Processor', '16GB RAM', '512GB SSD', '15.6" Display'],
  },
  2: {
    id: 2,
    name: 'Smartphone X',
    price: '$899',
    emoji: '📱',
    description: 'Latest smartphone with amazing features',
    specs: [
      '6.5" OLED Display',
      '128GB Storage',
      '5G Compatible',
      '48MP Camera',
    ],
  },
  3: {
    id: 3,
    name: 'Wireless Headphones',
    price: '$299',
    emoji: '🎧',
    description: 'Premium sound quality headphones',
    specs: [
      'Active Noise Cancellation',
      '30h Battery Life',
      'Bluetooth 5.0',
      'Premium Sound',
    ],
  },
  4: {
    id: 4,
    name: 'Smart Watch',
    price: '$399',
    emoji: '⌚',
    description: 'Track your fitness and stay connected',
    specs: [
      'Heart Rate Monitor',
      'GPS Tracking',
      'Water Resistant',
      '7-day Battery',
    ],
  },
  5: {
    id: 5,
    name: 'Tablet Plus',
    price: '$699',
    emoji: '📱',
    description: 'Perfect for work and entertainment',
    specs: [
      '10.5" Display',
      '256GB Storage',
      'Apple Pencil Support',
      'All-day Battery',
    ],
  },
  6: {
    id: 6,
    name: 'Camera Pro',
    price: '$1,499',
    emoji: '📷',
    description: 'Professional camera for photographers',
    specs: ['24MP Sensor', '4K Video', 'Weather Sealed', 'Dual Card Slots'],
  },
};

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData[productId];

  if (!product) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="card">
            <h2>❌ Product Not Found</h2>
            <p>The product with ID "{productId}" does not exist.</p>
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container product-detail">
        <button
          onClick={() => navigate('/products')}
          className="btn btn-secondary"
        >
          ← Back to Products
        </button>

        <div className="card" style={{ marginTop: '24px' }}>
          <div className="product-detail-header">
            <div className="product-detail-image">{product.emoji}</div>

            <div className="product-detail-info">
              <h1>{product.name}</h1>
              <div className="product-price">{product.price}</div>
              <p>{product.description}</p>

              <h3>📋 Specifications:</h3>
              <ul className="concept-list">
                {product.specs.map((spec, index) => (
                  <li key={index}>✓ {spec}</li>
                ))}
              </ul>

              <div className="product-actions">
                <button className="btn btn-primary">🛒 Add to Cart</button>
                <button className="btn btn-secondary">
                  ❤️ Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ background: '#eff6ff', borderLeft: '4px solid #3b82f6' }}
          >
            <h4>🔍 useParams Hook Demo</h4>
            <p
              style={{
                margin: '8px 0 0 0',
                fontSize: '14px',
                color: '#1e40af',
              }}
            >
              <strong>Current Product ID from URL:</strong> {productId}
              <br />
              <strong>Route Pattern:</strong> /products/:productId
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
