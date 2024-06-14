import { Outlet } from "react-router-dom";
// import { Header } from "src/widgets/Header";
// import { Footer } from "src/widgets/Footer";

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
