import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUserData } from '../../services/auth/authSlice';
import { NavLink } from 'react-router-dom';
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { useProvideAuth } from '../../services/hooks/useAuth';

import styles from './profile.module.css';

function Profile() {
  const { signOut } = useProvideAuth(); 

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { user, loading, error } = authState || {}; 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initialUserData, setInitialUserData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserData());
    } else {
      setName(user.name || '');
      setEmail(user.email || '');
      setInitialUserData({ name: user.name || '', email: user.email || '' });
    }
  }, [dispatch, user]);

  const handleSubmit = async () => {
    const updatedUserData = { name, email, ...(password && { password }) };
  
    try {
      const result = await dispatch(updateUserData(updatedUserData)).unwrap();
      console.log('Данные пользователя успешно обновлены:', result);
      setInitialUserData({ name: result.name, email: result.email });
    } catch (err) {
      console.error('Ошибка при обновлении данных пользователя:', err);
      alert(err); 
    }
  };
  
  const handleCancel = () => {
    setName(initialUserData.name);
    setEmail(initialUserData.email);
    setPassword('');
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }
  
  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className={`${styles.contentbody}`}>
      <div className={`${styles.navigation} pr-15`}>
        <div className={`${styles.navigation_links_wrap} pb-20`}>
          <div className={styles.navigation_link}>
            <NavLink
              to='/account/profile'
              className={({ isActive }) => `${styles.navigation_link_a} ${isActive ? styles.active_a : ''} text text_type_main-medium`}>
              Профиль
            </NavLink>
          </div>

          <div className={styles.navigation_link}>
            <NavLink
              to='/profile/orders'
              className={({ isActive }) => `${styles.navigation_link_a} ${isActive ? styles.active_a : ''} text text_type_main-medium`}>
              История заказов
            </NavLink>
          </div>

          <div className={styles.navigation_link}>
            <NavLink
              to='/login' 
              className={({ isActive }) => `${styles.navigation_link_a} ${isActive ? styles.active_a : ''} text text_type_main-medium`}
              onClick={signOut}>
              Выход
            </NavLink>
          </div>
        </div>
        <p className={`${styles.navigation_p} text text_type_main-default`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>

      <div className={styles.formholder}>
        <div className={`${styles.input_field} pb-6`}>
          <EmailInput
            onChange={(e) => setName(e.target.value)}
            value={name}
            name='name'
            placeholder="Имя"
            isIcon={true}
          />
        </div>

        <div className={`${styles.input_field} pb-6`}>
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            placeholder="Логин"
            isIcon={true}
          />
        </div>

        <div className={`${styles.input_field} pb-6`}>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            icon='EditIcon'
          />
        </div>

        <div>
          <Button htmlType="button" type="secondary" size="large" onClick={handleCancel}>
            Отмена
          </Button>
          <Button htmlType="button" type="primary" size="large" onClick={handleSubmit}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
