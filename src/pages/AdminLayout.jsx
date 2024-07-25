import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import HeaderAdmin from "../components/HeaderAdmin";

const AdminLayout = () => {
  return (
    <div className="flex bg-neutral-100 h-screen w-screen overflow-auto">
      <Sidebar />
      <div className="w-full">
        <HeaderAdmin />
        <Outlet/>
      </div>
    </div>
  );
}

export default AdminLayout
