import axios from 'axios';

const API_URL = process.env.HUMOR_BACKEND_URL
  ? `${process.env.HUMOR_BACKEND_URL}/api`
  : 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getBackendStatus() : Promise<string> {
  const response = await api.get('/');
  return response.data;
}

export async function addEntry(entry: any) : Promise<void> {
  await api.post('/entry', {entry: entry});
}
