import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "src/pages/AuthPage";
import { Admin } from "src/pages/Admin";
import { AuthorizationWrap } from "./AuthorizationWrap";
import { Layout } from "./Layout";
import { NotFound } from "src/pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthorizationWrap />}>
        <Route index element={<Navigate to="/admin" replace />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
