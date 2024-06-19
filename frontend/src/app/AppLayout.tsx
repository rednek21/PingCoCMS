import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "src/features/auth";

interface AuthorizationGuardProps {
  children: React.ReactNode;
}

const AuthorizationGuard: React.FC<AuthorizationGuardProps> = ({
  children,
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  let navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const isAuth = await auth.checkAuth();
        setIsAuthorized(isAuth);
      } catch (error) {
        console.error("Authorization check failed", error);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthorization();
  }, []);

  useEffect(() => {
    if (!isCheckingAuth && !isAuthorized) {
      navigate("/auth");
    }
  }, [isCheckingAuth, isAuthorized, navigate]);

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
