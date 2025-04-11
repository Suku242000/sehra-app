
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await axios.get('/api/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDashboardData(res.data);
    };
    fetchDashboard();
  }, [token]);

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>{dashboardData.title}</h1>
      <p>{dashboardData.description}</p>
      {/* Add more dashboard content based on your data structure */}
    </div>
  );
};

export default Dashboard;
