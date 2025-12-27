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

        <Route>
          <Route path="tasks" element={<AppLayout/>}>
            <Route index /> {/* task list */}
            <Route path=":taskId">
              <Route path="details" />
              <Route path="edit" />
            </Route>
          </Route>
          <Route path="settings" />
          <Route path="profile" />
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
