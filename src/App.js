import React, { useState } from 'react';
import ProductList from './components/Productslist';
import Cart from './components/Cart';
import Check from './components/Check'
import Navbar from './components/Navbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCartItems([]);
    setIsCheckout(false);
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} />
      {!isCheckout ? (
        <>
          <ProductList addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} />
        </>
      ) : (
        <Check cartItems={cartItems} clearCart={clearCart} />
      )}
    </div>
  );
};

export default App;


