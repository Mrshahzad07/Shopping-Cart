import React, { useState } from 'react';
import './Homepage.css';
import ProductCard from '../components/ProductCard';
import ProductDetails from '../components/ProductDetails'; // Import the new component

const products = [
  // ... (Your existing product data here)
];

const HomePage = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Shop!</h1>
          <p>Discover amazing products and deals, and add them to your cart with just a click.</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </section>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} onViewDetails={handleViewDetails} />
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default HomePage;