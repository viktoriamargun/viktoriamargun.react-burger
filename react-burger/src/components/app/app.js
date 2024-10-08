import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './app.module.css';
import AppHeader from '../header/header.js';
import AppContent from '../main/app-content.js';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../protected-route';

import RegisterPage from '../../pages/registration/registration';
import SignIn from '../../pages/registration/sign-in';
import ForgotPassword from '../../pages/registration/forgot-password';
import ResetPassword from '../../pages/registration/reset-password';
import FullPage from '../../pages/ingredient_info/full-page';
import Profile from '../../pages/account/profile';
import NotFound404 from '../../pages/notfound404';

import {ingredientsSlice} from "../../services/ingredients/slice";
import {fetchIngredients} from "../../services/ingredients/actions";

import Modal from '../../components/main/modal/modal';
import Ingredient from "../../components/main/modal/ingredient";


function App() {
  const {loading, error, ingredients} = useSelector(ingredientsSlice.selectors.state);
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const backgroundLocation = currentLocation.state?.backgroundLocation;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]); 

  return (
    <>
      <AppHeader />
      <Routes location={backgroundLocation || currentLocation}>
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


{/* ----------------------------------------------------------------------------------------------- */}
        <Route path="/login" element={<ProtectedRoute anonymous={true}><SignIn /></ProtectedRoute>} />
        <Route path="/register" element={<ProtectedRoute anonymous={true}><RegisterPage /></ProtectedRoute>} />
        <Route path="/register/forgot-password" element={<ProtectedRoute anonymous={true}><ForgotPassword /></ProtectedRoute>} />
        <Route path="/reset-password" element={<ProtectedRoute anonymous={true}><ResetPassword /></ProtectedRoute>} />

        <Route path="/account/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path="/ingredients/:id" element={<FullPage />} />

        <Route path="*" element={<NotFound404 />} />
{/* ----------------------------------------------------------------------------------------------- */}

      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                title={"Детали ингредиента"}
                handleClose={() => navigate(-1)}
              >
                <Ingredient />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;