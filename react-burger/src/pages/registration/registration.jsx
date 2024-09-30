import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../services/auth/authSlice';
import { Input, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import styles from './registration.module.css';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(registerUser({ email, password, name }));
      if (registerUser.fulfilled.match(resultAction)) {
        navigate('/');
      } else {
        console.error('Ошибка регистрации:', resultAction.payload || resultAction.error.message);
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error.message);
    }
  };
  
  return (
    <div className={`${styles.contentbody} `}>
      <div className={`${styles.formholder} `}>
        <h1 className={`${'mt-0'} ${'mb-0'} ${'pb-6'} `}>Регистрация</h1>

        <form onSubmit={handleSubmit} className={`${styles.form} `}>

          <div className={`${styles.input_field} ${'pb-6'}`}>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name={'name'}
              placeholder="Имя"
            />   
          </div>

          <div className={`${styles.input_field} ${'pb-6'}`}>
            <EmailInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name={'email'}
              placeholder="Email"
            />     
          </div>

          <div className={`${styles.input_field} ${'pb-6'}`}>
            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name={'password'}
            />     
          </div>

          <div className={`${'pb-20'}`}>
            <Button htmlType="submit" type="primary" size="large">Зарегистрироваться</Button>
          </div>

          <div className={`${styles.additional_actions} ${'pb-4'}`}>
            <p className={`${styles.registration_btn_p} ${'text'} ${'text_type_main-default'}`}>Уже зарегистрированы?</p>
            <Link 
              to='/login'
              className={`${styles.registration_btn_a} ${'text'} ${'text_type_main-default'} ${'pl-2'}`}>
              Войти
            </Link>      
          </div>          

        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;

