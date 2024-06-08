import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCookie } from "src/entities/Utilities";
import { useTokens } from "src/entities/Auth";
// import { Header } from "src/widgets/Header";
// import { Footer } from "src/widgets/Footer";

export function Layout() {
  const [authorized, setAuthorized] = useState(false);
  const { verifyToken, refreshAccessToken } = useTokens();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = async () => {
      //если нет аксесс куки то редирект в авторизацию:
      if (!getCookie("accessJWT")) navigate("/admin/auth");
      //если есть аксесс куки и он хороший то авторизован:
      if (await verifyToken(getCookie("accessJWT") as string))
        return setAuthorized(true);
      //если после верхнего аксесс куки плохой то проверяем хороший ли рефреш куки то рефрешим аксесс и записываем оба куки, авторизация пройдена:
      if (await verifyToken(getCookie("refreshJWT") as string)) {
        let data = await refreshAccessToken(getCookie("refreshJWT") as string);
        document.cookie = `accessJWT=${data.access}; path=/; max-age=31536000`;
        document.cookie = `refreshJWT=${data.refresh}; path=/; max-age=31536000`;
        return setAuthorized(true);
      }
      //если даже рефреш куки не хороший то все токены убрать и на авторизацию:
      document.cookie = `accessJWT=; path=/; max-age=0`;
      document.cookie = `refreshJWT=; path=/; max-age=0`;
      navigate("/admin/auth");
    };
    auth();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Outlet context={{ authorized, setAuthorized }} />
      {/* <Footer /> */}
    </>
  );
}
