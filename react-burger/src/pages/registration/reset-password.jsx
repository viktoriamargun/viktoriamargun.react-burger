import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, token }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/login');  
      } else {
        alert('Ошибка при сбросе пароля');
      }
    } catch (error) {
      alert('Произошла ошибка: ' + error.message);
    }
  };

  return (
    <div className={`${styles.contentbody} `}>
      <div className={`${styles.formholder} `}>
      <h1 className={`${'mt-0'} ${'mb-0'} ${'pb-6'} `}>Восстановление пароля</h1>

        <div className={`${styles.input_field} ${'pb-6'}`}>
          <PasswordInput
            placeholder="Введите новый пароль"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />  
        </div>

        <div className={`${styles.input_field} ${'pb-6'}`}>
          <Input
            type="text"
            placeholder="Введите код из письма"
            onChange={e => setToken(e.target.value)}
            value={token}
            name="token"
          />
        </div>

        <div className={`${'pb-20'}`}>
          <Button htmlType="button" type="primary" size="large" onClick={handleResetPassword}>Сохранить</Button>
        </div>

        <div className={`${styles.additional_actions} ${'pb-4'}`}>
          <p className={`${styles.registration_btn_p} ${'text'} ${'text_type_main-default'}`}>Вспомнили пароль?</p>
          <Link
            to='/login'
            className={`${styles.registration_btn_a} ${'text'} ${'text_type_main-default'} ${'pl-2'}`}>
            Войти
          </Link>        
        </div>       
      </div>
    </div>
  );
}

export default ResetPassword;

