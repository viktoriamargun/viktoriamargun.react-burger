import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        // Редирект на страницу сброса пароля
        navigate('/reset-password');
      } else {
        alert('Ошибка при отправке запроса');
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
          <Input
            type="email"
            placeholder="Укажите e-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
            name="email"
          />
        </div>

        <div className={`${'pb-20'}`}>
          <Button htmlType="button" type="primary" size="large" onClick={handleForgotPassword}>Восстановить</Button>
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

export default ForgotPassword;