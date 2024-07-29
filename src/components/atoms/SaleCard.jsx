import React from 'react';

const SaleCard = ({ date, clientId, employeeId, totalPrice }) => (
  <div className="sale-card">
    <h2>Venta ID: {clientId}</h2>
    <p>Cliente ID: {clientId}</p>
    <p>Empleado ID: {employeeId}</p>
    <p>Fecha: {new Date(date).toLocaleDateString()}</p>
    <p>Total: ${totalPrice}</p>
  </div>
);

export default SaleCard;
