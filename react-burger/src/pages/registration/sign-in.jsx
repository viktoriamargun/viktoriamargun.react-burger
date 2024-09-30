import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth/authSlice';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './sign-in.module.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        navigate('/');
      } else {
        setError(resultAction.payload || resultAction.error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={`${styles.contentbody} `}>
      <div className={`${styles.formholder} `}>
        <h1 className={`${'mt-0'} ${'mb-0'} ${'pb-6'} `}>Вход</h1>

        <form onSubmit={handleSubmit} className={`${styles.form} `}>
          <div className={`${styles.input_field} ${'pb-6'}`}>
            <EmailInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name={'email'}
              isIcon={false}
            />       
          </div>

          <div className={`${styles.input_field} ${'pb-6'}`}>
            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name={'password'}
            />     
          </div>

          {error && <p className={`${styles.error_message} ${'text'} ${'text_type_main-default'}`}>{error}</p>}

          <div className={`${'pb-20'} `}>
            <Button htmlType="submit" type="primary" size="large">Войти</Button>
          </div>

          <div className={`${styles.additional_actions} ${'pb-4'}`}>
            <p className={`${styles.registration_btn_p} ${'text'} ${'text_type_main-default'} `}>Вы — новый пользователь?</p>
            <Link 
              to='/register'
              className={`${styles.registration_btn_a} ${'text'} ${'text_type_main-default'} ${'pl-2'}`}>
              Зарегистрироваться
            </Link>         
          </div>

          <div className={`${styles.additional_actions}`}>
            <p className={`${styles.registration_btn_p} ${'text'} ${'text_type_main-default'} `}>Забыли пароль?</p>
            <Link 
              to='/register/forgot-password'
              className={`${styles.registration_btn_a} ${'text'} ${'text_type_main-default'} ${'pl-2'}`}>
              Восстановить пароль
            </Link>            
          </div>        
        </form>
      </div>
    </div>
  );
}

export default SignInPage;



