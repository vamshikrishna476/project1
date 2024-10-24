import React from 'react';

const Navbar = ({ cartCount }) => (
  <nav>
    <h1>E commerce website</h1>
    <div>Cart: {cartCount}</div>
  </nav>
);

export default Navbar;
