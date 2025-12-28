import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="dark bg-background text-content min-h-screen w-full flex items-center justify-center">
      <Outlet></Outlet>
    </div>
  );
};
export default AuthLayout;
