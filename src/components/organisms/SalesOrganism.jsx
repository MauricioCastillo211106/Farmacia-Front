import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SaleCard from '../atoms/SaleCard'; // Asegúrate de que la ruta sea correcta

const SalesPage = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/sale/", requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            alert('Unauthorized: Please check your token');
            navigate('/login');
            return;
          }
          throw new Error('An error occurred while fetching data');
        }
        return response.json();
      })
      .then(data => {
        setSales(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Ventas</h1>
      <div className="sales-grid">
        {sales.map(sale => (
          <SaleCard 
            key={sale.sale_id} 
            date={sale.created_at} 
            clientId={sale.client_id} 
            employeeId={sale.employee_id}
            totalPrice={sale.total_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
