import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token de autenticación
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión o principal
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2>Zona Administrativa</h2>
      <div className="sidebar-section">
        <h3>Inventario</h3>
        <ul>
          <li><Link to="/admin/add-product">Agregar Producto</Link></li>
          <li><Link to="/admin/delete-product">Eliminar Producto</Link></li>
          <li><Link to="/admin/edit-product">Editar Producto</Link></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Ventas</h3>
        <ul>
          <li><Link to="/admin/view-all-sales">Historial de Ventas</Link></li>
          <li><Link to="/admin/view-individual-sale">Ventas Individuales</Link></li>
           {/*<li><Link to="#">Productos por Acabar</Link></li>*/}
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Empleados</h3>
        <ul>
          <li><Link to="/admin/add-employee">Agregar Empleado</Link></li>
          <li><Link to="/admin/delete-employee">Eliminar Empleado</Link></li>
          <li><Link to="/admin/edit-employee">Editar Empleado</Link></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Navegación</h3>
        <ul>
          <li><a href="/login" onClick={handleLogout}>Cerrar Sesión</a></li>
          <li><Link to="/">Página Principal</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
