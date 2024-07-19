import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const PurchaseSummary = ({ products, total, onGenerateVoucher }) => {
  return (
    <div className="purchase-summary">
      <Title text="Resumen de compra" />
      <Text>Productos: ${products}</Text>
      <Text>Total: ${total}</Text>
      <Button onClick={onGenerateVoucher}>Generar voucher</Button>
    </div>
  );
};

export default PurchaseSummary;
