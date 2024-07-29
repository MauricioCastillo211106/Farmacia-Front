import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const DeleteEmployeeForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();

    if (!employeeId) {
      alert("Por favor, ingrese el ID del empleado.");
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Error: Usuario no autenticado');
      navigate('/login');
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`https://farmacia-cris-backend.onrender.com/api/employee/delete/${employeeId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            alert('Unauthorized: Please check your token');
            navigate('/login');
            return;
          }
          return response.text().then(text => { throw new Error(text); });
        }
        return response.text();
      })
      .then((result) => {
        alert('Empleado eliminado con éxito');
        console.log(result);
      })
      .catch((error) => {
        alert('Error al eliminar el empleado: ' + error.message);
        console.error(error);
      });
  };

  return (
    <div className="admin-form">
      <Title>Eliminar Empleado</Title>
      <form onSubmit={handleDelete}>
        <div className="form-row">
          <Label htmlFor="employeeId">ID del Empleado:</Label>
          <Input
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="ID del empleado"
          />
        </div>
        <Button type="submit">Eliminar Empleado</Button>
      </form>
    </div>
  );
};

export default DeleteEmployeeForm;
