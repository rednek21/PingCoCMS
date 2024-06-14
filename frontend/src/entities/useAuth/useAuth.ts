import { getCookie } from "../useCookies";
import { useTokens } from "../useTokens";

export const useAuth = () => {
  const { verifyToken, refreshAccessToken, removeTokens } = useTokens();

  const checkAuth = async () => {
    //если нет аксесс куки то выйти:
    if (!getCookie("accessJWT")) return false;

    //если есть аксесс куки и он хороший то авторизован:
    if (await verifyToken(getCookie("accessJWT") as string)) {
      return true;
    } else {
      //если после верхнего аксесс куки плохой то проверяем хороший ли рефреш куки то рефрешим аксесс и записываем оба куки, авторизация пройдена:
      if (await verifyToken(getCookie("refreshJWT") as string)) {
        refreshAccessToken(getCookie("refreshJWT") as string);
        return true;
      } else {
        removeTokens();
        return false;
      }
    }
  };

  return {
    checkAuth,
    // logout,
    // authorize,
  };
};
