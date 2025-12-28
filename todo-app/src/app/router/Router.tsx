import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../pages/auth/LoginPage";
import SignupPage from "../../pages/auth/SignupPage";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../../pages/errors/notFound";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO landing page */}
        <Route path="/"></Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignupPage />}></Route>
        </Route>

        <Route element={<AppLayout />}>
          <Route path="today" />
          <Route path="calendar" />
          <Route path="lists" />
          <Route path="tasks" />
          <Route path="profile" />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
