import { Navigate } from 'react-router-dom';
import { useProvideAuth } from '../services/hooks/useAuth';
import { useEffect, useState } from 'react';

export function ProtectedRouteElement({ element }) {
  const { getUser, user } = useProvideAuth();
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await getUser();
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return <div>Загрузка...</div>;
  }

  return user ? element : <Navigate to="/login" replace />;
}
