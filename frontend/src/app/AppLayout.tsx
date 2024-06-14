import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "src/entities/useAuth";

interface AuthorizationGuardProps {
  children: React.ReactNode;
}

const AuthorizationGuard: React.FC<AuthorizationGuardProps> = ({
  children,
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  let navigate = useNavigate();
  const { checkAuth } = useAuth();

  useEffect(() => {
    const checkAuthorization = async () => {
      const isAuth = await checkAuth();
      setIsAuthorized(isAuth);
      setIsCheckingAuth(false);
    };

    checkAuthorization();
  }, []);

  if (isCheckingAuth) {
    // Показываем лоадер или ничего не показываем, пока проверка не завершена
    return <div>Loading...</div>;
  }

  if (isAuthorized) {
    // Если авторизация успешна, показываем детей
    return children;
  }

  //Если авторизация не успешна то на страницу авторизации
  navigate("/auth");
};

export const AppLayout = () => {
  return (
    <AuthorizationGuard>
      <Outlet />
    </AuthorizationGuard>
  );
};
