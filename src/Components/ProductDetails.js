import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onClose, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    onClose(); // Close the modal after adding to cart
  };

  return (
    <div className="product-details-overlay" onClick={onClose}>
      <div className="product-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">×</button>
        
        <div className="product-details-content">
          <div className="product-details-image-container">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-details-image" 
            />
          </div>
          
          <div className="product-details-info">
            <h2 className="product-title">{product.name}</h2>
            <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>
            
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <div className="product-specs">
              <h3>Specifications</h3>
              <ul>
                <li><strong>Display:</strong> {product.specs.display}</li>
                <li><strong>Processor:</strong> {product.specs.processor}</li>
                <li><strong>Camera:</strong> {product.specs.camera}</li>
                <li><strong>Battery:</strong> {product.specs.battery}</li>
                <li><strong>Storage:</strong> {product.specs.storage}</li>
              </ul>
            </div>
            
            <button 
              className="add-to-cart-btn" 
              onClick={handleAddToCart}
            >
              Add to Cart - ₹{product.price.toLocaleString('en-IN')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;