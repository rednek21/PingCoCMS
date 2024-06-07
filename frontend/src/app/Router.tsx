import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { AuthPage } from "src/pages/AuthPage";

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/admin" />
        <Route path="/admin/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}
