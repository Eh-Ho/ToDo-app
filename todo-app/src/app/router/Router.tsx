import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO landing page */}
        <Route path="/"></Route>
        {/* TODO auth layout wrapper */}
        <Route>
          <Route path="login"></Route>
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
