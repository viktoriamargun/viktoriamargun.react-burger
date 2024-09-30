import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCookie, setCookie } from '../../utils/cookies';
import { loginUser, logoutUser, fetchUserData } from '../auth/authSlice';

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const getUser = async () => {
    try {
      const resultAction = await dispatch(fetchUserData());
      if (fetchUserData.fulfilled.match(resultAction)) {
        setUser(resultAction.payload);
        console.log('Данные пользователя:', resultAction.payload);
      } else {
        throw new Error(resultAction.error.message);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signIn = async (form) => {
    try {
      const resultAction = await dispatch(loginUser(form));

      if (loginUser.fulfilled.match(resultAction)) {
        const headers = resultAction.meta.response.headers;
        let authToken = headers.get('Authorization')?.split('Bearer ')[1];
        
        if (authToken) {
          setCookie('token', authToken);
          console.log('Токен сохранен:', authToken);
        }
        setUser(resultAction.payload.user);
        console.log('Пользователь успешно авторизован:', resultAction.payload.user);
      } else {
        throw new Error(resultAction.error.message);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signOut = async () => {
    try {
      const resultAction = await dispatch(logoutUser());

      if (logoutUser.fulfilled.match(resultAction)) {
        setUser(null); 
        deleteCookie('token'); 
        navigate('/login');  
        console.log('Вы вышли из системы, авторизуйтесь снова', resultAction.payload);
      } else {
        throw new Error(resultAction.error.message);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    if (error.message === 'Токен истек. Пожалуйста, войдите снова.') {
      setUser(null);
      deleteCookie('token');
      navigate('/login');
    } else {
      console.error('Ошибка аутентификации:', error);
    }
  };

  return {
    user,
    getUser,
    signIn,
    signOut
  };
}
