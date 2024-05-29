import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings');
        setSettings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching settings: ', error);
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading settings...</p>
      ) : (
        <div>
          <h1>Dashboard</h1>
          <p>Bot Name: {settings.botName}</p>
          <p>Prefix: {settings.prefix}</p>
          <p>Moderation Level: {settings.moderationLevel}</p>
          {/* Add more settings display as needed */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;