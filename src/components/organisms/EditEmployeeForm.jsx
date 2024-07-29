import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegación
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const EditEmployeeForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosition] = useState('');
  const [createdBy, setCreatedBy] = useState('Master'); // Valor predeterminado
  const navigate = useNavigate(); // Hook para navegación

  const handleSubmit = (e) => {
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
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      full_name: fullName,
      password: password,
      salary: parseFloat(salary), // Asegurarse de que sea un número
      position: position,
      created_by: createdBy
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`http://localhost:3000/api/employee/edit/${employeeId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            alert('Unauthorized: Please check your token');
            navigate('/login');
            return;
          }
          return response.text().then(text => { throw new Error(text); });
        }
        return response.json();
      })
      .then((result) => {
        alert('Empleado actualizado con éxito');
        console.log(result);
      })
      .catch(error => {
        alert('Error al actualizar el empleado: ' + error.message);
        console.error(error);
      });
  };

  return (
    <div className="admin-form">
      <Title>Editar Empleado</Title>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <Label htmlFor="employeeId">ID del Empleado:</Label>
          <Input
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="ID del empleado"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="fullName">Nombre Completo:</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nombre completo"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="password">Contraseña:</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="salary">Salario:</Label>
          <Input
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Salario"
          />
        </div>
        <div className="form-row">
          <Label htmlFor="position">Posición:</Label>
          <Input
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Posición"
          />
        </div>
        <Button type="submit">Actualizar Empleado</Button>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
