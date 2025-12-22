export const BASE_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  auth: {
    login: `${BASE_URL}/v1/login`,
    signup: `${BASE_URL}/v1/signup`,
  },
  // tasks: {
  // }
};
