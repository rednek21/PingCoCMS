import { Outlet, useOutletContext } from "react-router-dom";
import { adminContext } from "./AuthorizationWrap";
// import { Header } from "src/widgets/Header";
// import { Footer } from "src/widgets/Footer";

export const Layout = () => {
  const context = useOutletContext() as adminContext;
  return (
    <>
      {/* <Header /> */}
      <Outlet context={context} />
      {/* <Footer /> */}
    </>
  );
};
