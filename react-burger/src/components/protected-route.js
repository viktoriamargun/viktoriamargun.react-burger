import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children, anonymous = false }) {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const location = useLocation(); // Получаем текущий путь
  const from = location.state?.from || '/'; // Определяем путь, на который нужно вернуться

  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
    // ...то отправляем его на предыдущую страницу
    return <Navigate to={from}/>;
  }

  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    // ...то отправляем его на страницу логина, сохраняя исходный путь
    return <Navigate to="/login" state={{ from: location }}/>;
  }

  // Если все условия соблюдены, рендерим детей (контент маршрута)
  return children;
}
