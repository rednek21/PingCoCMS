import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { AuthPage } from "src/pages/AuthPage";
import { Admin } from "src/pages/Admin";

export function Router() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Admin />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}
