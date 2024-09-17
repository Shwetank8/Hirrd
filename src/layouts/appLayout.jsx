import Header from "../components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-3 text-center bg-gray-800 mt-10">
        Shwetank Sinha
      </div>
    </div>
  );
};

export default AppLayout;