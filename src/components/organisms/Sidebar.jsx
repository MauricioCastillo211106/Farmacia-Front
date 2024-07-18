// src/components/organisms/Sidebar.jsx
import React from 'react';
import SidebarItem from '../molecules/SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h2>Inventario</h2>
        <ul>
          <SidebarItem to="/admin/add-product" text="Agregar Producto" />
          <SidebarItem to="/admin/delete-product" text="Eliminar Producto" />
          <SidebarItem to="/admin/edit-product" text="Editar Producto" />
        </ul>
      </div>
      <div className="sidebar-section">
        <h2>Ventas</h2>
        <ul>
          <SidebarItem to="/admin/sales-history" text="Historial de Ventas" />
          <SidebarItem to="/admin/daily-sales" text="Ventas del Día" />
          <SidebarItem to="/admin/products-ending" text="Productos por Acabar" />
        </ul>
      </div>
      <div className="sidebar-section">
        <h2>Empleados</h2>
        <ul>
          <SidebarItem to="/admin/add-employee" text="Agregar Empleado" />
          <SidebarItem to="/admin/delete-employee" text="Eliminar Empleado" />
          <SidebarItem to="/admin/edit-employee" text="Editar Empleado" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
