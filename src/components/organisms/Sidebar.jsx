import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Zona Administrativa</h2>
      <div className="sidebar-section">
        <h3>Inventario</h3>
        <ul>
          <li><Link to="add-product">Agregar Producto</Link></li>
          <li><Link to="delete-product">Eliminar Producto</Link></li>
          <li><Link to="edit-product">Editar Producto</Link></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Ventas</h3>
        <ul>
          <li><Link to="#">Historial de Ventas</Link></li>
          <li><Link to="#">Ventas del Día</Link></li>
          <li><Link to="#">Productos por Acabar</Link></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Empleados</h3>
        <ul>
          <li><Link to="#">Agregar Empleado</Link></li>
          <li><Link to="#">Eliminar Empleado</Link></li>
          <li><Link to="#">Editar Empleado</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
