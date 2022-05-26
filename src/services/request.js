import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}`;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGQzOGJkNjA5MjM3OTQ4ZjcwZDllZiIsImlzQWRtaW4iOmZhbHNlLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NTM0MjI2NTgsImV4cCI6MTY1MzY4MTg1OH0.7Briur62nkRGprdFrOtHJT98mAXrMD1nT7YZ_zUj0gU';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-token': `Bearer ${TOKEN}` },
});
