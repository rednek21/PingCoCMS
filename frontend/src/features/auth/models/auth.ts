import { cookies } from "src/shared/utils/cookies";
import { jwtTokens } from "../api/jwtTokens";

export const auth = {
  login: async (login: string, password: string) => {
    let data = await jwtTokens.createTokens(login, password);
    if (data.detail) return data.detail;
    if (data.access) {
      document.cookie = `accessJWT=${data.access}; path=/; max-age=31536000`;
      document.cookie = `refreshJWT=${data.refresh}; path=/; max-age=31536000`;
    }
    return "";
  },

  checkAuth: async () => {
    //если нет аксесс куки то выйти:
    if (!cookies.getCookie("accessJWT")) return false;

    //если есть аксесс куки и он хороший то авторизован:
    if (await jwtTokens.verifyToken(cookies.getCookie("accessJWT") as string)) {
      return true;
    } else {
      //если после верхнего аксесс куки плохой то проверяем хороший ли рефреш куки то рефрешим аксесс и записываем оба куки, авторизация пройдена:
      if (
        await jwtTokens.verifyToken(cookies.getCookie("refreshJWT") as string)
      ) {
        jwtTokens.refreshAccessToken(cookies.getCookie("refreshJWT") as string);
        return true;
      } else {
        jwtTokens.removeTokens();
        return false;
      }
    }
  },

  logout: () => {
    jwtTokens.removeTokens();
  },
};
