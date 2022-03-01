import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = tokenString;
    return (userToken!=="undefined"&&userToken!==""&&userToken!==null)
  };
  console.log(getToken());

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', userToken);
    setToken(localStorage.getItem('token'));
    console.log(localStorage.getItem('token'));
  };

  return {
    setToken: saveToken,
    token
  }
}