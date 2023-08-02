import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";

import Dashboard from "../pages/dashboard";

import AppShellComponent from "../components/app-shell";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppShellComponent />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
