import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 300000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
});

export const getCourses = () => httpClient.get('/auth/profile').then((res) => {
  // courses.push(res.data);
  console.log('res', res);
})