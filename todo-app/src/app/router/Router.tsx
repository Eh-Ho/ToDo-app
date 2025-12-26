import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../pages/auth/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO landing page */}
        <Route path="/"></Route>
        {/* TODO auth layout wrapper */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup"></Route>
        </Route>

        <Route>
          {/* layout */}
          <Route path="tasks">
            <Route index /> {/* task list */}
            <Route path=":taskId">
              <Route path="details" />
              <Route path="edit" />
            </Route>
          </Route>
          <Route path="settings" />
          <Route path="profile" />
        </Route>

        {/* not found page */}
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
