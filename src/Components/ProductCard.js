import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, onViewDetails }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">₹{product.price.toLocaleString()}</p>
        <button 
          className="view-details-btn"
          onClick={onViewDetails}
        >
          View Details
        </button>
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;