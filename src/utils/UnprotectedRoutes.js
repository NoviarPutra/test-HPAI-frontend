import { Navigate, Outlet } from "react-router-dom";

const UnprotectedRoutes = () => {
  const token = localStorage.getItem("token");
  return !token ? <Outlet /> : <Navigate to='/' />;
};

export default UnprotectedRoutes;
