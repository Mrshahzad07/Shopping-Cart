import React, { useState } from 'react';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Iphone 16, 128GB',
    price: 78999,
    image: 'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large_2x.jpg',
    description: 'Experience the next generation of iPhone with the iPhone 16. Featuring a stunning 6.7-inch Super Retina XDR display, A18 Bionic chip, advanced camera system with 48MP main camera, and all-day battery life. Available in multiple stunning colors.',
    specs: {
      display: '6.7-inch Super Retina XDR',
      processor: 'A18 Bionic chip',
      camera: '48MP main + 12MP ultra-wide',
      battery: '4500mAh',
      storage: '128GB',
    }
  },
  {
    id: 2,
    name: 'Google Pixel 9, 128GB',
    price: 79999,
    image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/image_P9_2024Q2_Peony_LT_T-Shot_.width-1000.format-webp_SVFKGQ9.webp',
    description: 'Meet the Google Pixel 9, powered by Google Tensor G4. Experience extraordinary AI capabilities, stunning photography with the 50MP main camera, and pure Android experience. Features include Magic Eraser, Photo Unblur, and 24-hour battery life.',
    specs: {
      display: '6.5-inch OLED 120Hz',
      processor: 'Google Tensor G4',
      camera: '50MP main + 12MP ultra-wide',
      battery: '4700mAh',
      storage: '128GB',
    }
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24, 128GB',
    price: 64999,
    image: 'https://m.media-amazon.com/images/I/61Ub2IwiWIL.SX679.jpg',
    description: 'Discover the Samsung Galaxy S24 with Galaxy AI. Featuring a Dynamic AMOLED 2X display, Snapdragon 8 Gen 3 processor, and a versatile triple camera system. Experience next-level mobile computing with AI-powered features and Samsung Knox security.',
    specs: {
      display: '6.8-inch Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      camera: '200MP main + 12MP ultra-wide + 50MP telephoto',
      battery: '5000mAh',
      storage: '128GB',
    }
  },
  {
    id: 4,
    name: 'OnePlus 12R, 128GB',
    price: 38999,
    image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-1.jpg',
    description: 'The OnePlus 12R delivers flagship performance at an incredible value. Powered by Snapdragon 8 Gen 2, featuring a 120Hz AMOLED display, and 100W SUPERVOOC charging. Experience the speed you need with the signature OnePlus smooth performance.',
    specs: {
      display: '6.78-inch AMOLED 120Hz',
      processor: 'Snapdragon 8 Gen 2',
      camera: '50MP main + 8MP ultra-wide',
      battery: '5500mAh',
      storage: '128GB',
    }
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (!existingProduct) {
      setCartItems([...cartItems, product]);
    } else {
      alert('This item is already in the cart.');
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Header cartItemCount={cartItems.length} />
      <main className="main-content">
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart}
                onViewDetails={() => handleViewDetails(product)}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">No products available at the moment.</p>
        )}

        {cartItems.length > 0 ? (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </main>

      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          onClose={handleCloseDetails}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;