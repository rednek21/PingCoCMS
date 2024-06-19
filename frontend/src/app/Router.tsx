import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "src/pages/AuthPage";
import { NotFound } from "src/pages/NotFound";
import { Admin } from "src/pages/Admin";
import { Layout } from "./Layout";
import { AppLayout } from "./AppLayout";

export function Router() {
  return (
    <Routes>
      <Route path="auth" element={<AuthPage />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/admin" replace />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<Admin />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
