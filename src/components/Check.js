import React, { useState } from 'react';

const Check = ({ cartItems, clearCart }) => {
  const [form, setForm] = useState({ name: '', address: '', payment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return <h2>Thank you for your order!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="payment" placeholder="Payment Info" onChange={handleChange} required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Check;

