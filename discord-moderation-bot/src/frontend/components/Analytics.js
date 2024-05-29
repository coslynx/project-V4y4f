import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetchServerData();
  }, []);

  const fetchServerData = async () => {
    try {
      const response = await axios.get('/api/serverData');
      setServerData(response.data);
    } catch (error) {
      console.error('Error fetching server data: ', error);
    }
  };

  const data = {
    labels: serverData.map((data) => data.date),
    datasets: [
      {
        label: 'Server Activity',
        data: serverData.map((data) => data.activity),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Server Analytics</h2>
      <Line data={data} />
    </div>
  );
};

export default Analytics;