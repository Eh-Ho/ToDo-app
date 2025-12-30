import AppHeader from "../../components/common/AppHeader";
import AppSidebar from "../../components/common/AppSidebar";
import { useState, useEffect } from "react";
const AppLayout = () => {
  const [sideOpen, setSideOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-screen h-screen bg-background">
      <AppHeader sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <AppSidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
    </div>
  );
};

export default AppLayout;
