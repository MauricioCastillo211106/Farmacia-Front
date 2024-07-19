import React, { useState } from 'react';
import ShoppingCart from '../components/molecules/ShoppingCart';
import PurchaseSummary from '../components/molecules/PurchaseSummary';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    // Ejemplo de items en el carrito
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 20 }
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleGenerateVoucher = () => {
    // Lógica para generar el voucher
    alert('Voucher generado!');
  };

  return (
    <div className="shopping-cart-page">
      <ShoppingCart items={cartItems} />
      <PurchaseSummary products={total} total={total} onGenerateVoucher={handleGenerateVoucher} />
    </div>
  );
};

export default ShoppingCartPage;
