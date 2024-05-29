import React from 'react';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

function Index() {
  return (
    <div>
      <h1>Welcome to Discord Moderation Bot Dashboard</h1>
      <Dashboard />
      <Analytics />
    </div>
  );
}

export default Index;