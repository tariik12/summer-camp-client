import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../UseAuth/UseAuth';
import { useEffect, useState } from 'react';

const axiosSecure = axios.create({
  baseURL: 'https://summer-language-camp-server.vercel.app', 
});

const useAxiosSecure = () => {
  const { logOut } =UseAuth(); 
  const navigate = useNavigate(); 
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        if (error.message === 'Network Error' && retryCount < maxRetries) {
          setRetryCount(retryCount + 1);
          return axiosSecure(error.config);
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate,retryCount]);

  return [axiosSecure];
};

export default useAxiosSecure;