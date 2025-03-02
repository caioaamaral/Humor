import axios from 'axios';

const API_URL = `${process.env.REACT_APP_HUMOR_BACKEND_URL}/api`

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

export async function addEntry(entry: string) : Promise<void> {
  console.log('API_URL: ', API_URL);
  console.log('About to submit:', entry);
  await api.post('/entry', {entry: entry}, {withCredentials: true});
}
