import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './app.module.css';
import AppHeader from '../header/header.js';
import AppContent from '../main/app-content.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRouteElement } from '../protected-route';

import RegisterPage from '../../pages/registration/registration';
import SignIn from '../../pages/registration/sign-in';
import ForgotPassword from '../../pages/registration/forgot-password';
import ResetPassword from '../../pages/registration/reset-password';
import FullPage from '../../pages/ingredient_info/full-page';
import Profile from '../../pages/account/profile';
import NotFound404 from '../../pages/notfound404';

import {ingredientsSlice} from "../../services/ingredients/slice";
import {fetchIngredients} from "../../services/ingredients/actions";

function App() {
  const {loading, error, ingredients} = useSelector(ingredientsSlice.selectors.state)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <Router>
      <AppHeader />
      <Routes>
      {/* Открытые маршруты */}
        <Route 
            path="/" 
            element={
              loading ? (
                <p>Загрузка...</p>
              ) : error ? (
                <p>Ошибка: {error.message}</p>
              ) : ingredients.length ? (
                <AppContent />
              ) : (
                <p>Нет данных</p>
              )
            } 
          />
        
        <Route path="/ingredients/:id" element={<FullPage />} />

               
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />        
        <Route path="/account/profile" element={<Profile />} />            


{/* <Route path="/login" element={<ProtectedRouteElement element={<SignIn />} />} />
    <Route path="/register" element={<ProtectedRouteElement element={<RegisterPage />} />} />
    <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} />} />
    <Route path="/register/forgot-password" element={<ForgotPassword />} /> 
*/}

    
    {/* Защищенные маршруты */}
        <Route path="/account/profile" element={<ProtectedRouteElement element={<Profile />} />} /> 

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;