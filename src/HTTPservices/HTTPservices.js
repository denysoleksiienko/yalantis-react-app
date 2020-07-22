import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0',
  headers: { 'Content-Type': 'application/json' },
});

export const HTTPservices = {
  getAllUsers: async () => {
    const response = await instance.get(`/users`);
    return response.data;
  },
};
