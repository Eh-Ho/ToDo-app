import AppHeader from "../../components/common/AppHeader";
import AppSidebar from "../../components/common/AppSidebar";
import { useState } from "react";
const AppLayout = () => {
  const [sideOpen, setSideOpen] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen bg-background">
      <AppHeader sideOpen = {sideOpen} setSideOpen={setSideOpen}/>
      <AppSidebar sideOpen={sideOpen}/>
    </div>
  );
};

export default AppLayout;
