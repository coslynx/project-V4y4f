import axios from 'axios';

const BASE_URL = 'https://api.discord.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getServerActivity = async () => {
  try {
    const response = await api.get('/server/activity');
    return response.data;
  } catch (error) {
    console.error('Error getting server activity: ', error);
    throw error;
  }
};

export const getServerAlerts = async () => {
  try {
    const response = await api.get('/server/alerts');
    return response.data;
  } catch (error) {
    console.error('Error getting server alerts: ', error);
    throw error;
  }
};

export const postScheduledMessage = async (message) => {
  try {
    const response = await api.post('/scheduled/messages', { message });
    return response.data;
  } catch (error) {
    console.error('Error posting scheduled message: ', error);
    throw error;
  }
};

export const createCustomCommand = async (command) => {
  try {
    const response = await api.post('/custom/commands', { command });
    return response.data;
  } catch (error) {
    console.error('Error creating custom command: ', error);
    throw error;
  }
};

export const getUserAnalytics = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}/analytics`);
    return response.data;
  } catch (error) {
    console.error('Error getting user analytics: ', error);
    throw error;
  }
};