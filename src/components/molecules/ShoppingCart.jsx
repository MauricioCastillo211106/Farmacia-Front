import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';

const ShoppingCart = ({ items }) => {
  return (
    <div className="shopping-cart">
      <Title text="Carrito de compras" />
      {items.length > 0 ? (
        items.map((item, index) => (
          <Text key={index}>{item.name} - ${item.price}</Text>
        ))
      ) : (
        <Text>No hay productos en el carrito</Text>
      )}
    </div>
  );
};

export default ShoppingCart;
