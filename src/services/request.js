import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}`;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZlMWE5MWQxYjIxZTQ4MDAwZTg1YiIsImlzQWRtaW4iOnRydWUsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1MzU5NjcxNywiZXhwIjoxNjUzODU1OTE3fQ.j3ZmyzW_0ZBPb-sIxQjFYVSbtnHbBXsUGkT2LaicD14';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  header: { 'x-token': `Bearer ${TOKEN}` },
});
