import "react-alice-carousel/lib/alice-carousel.css";
import Layout from "./Layout";
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from "../utils/auth";

function AppLayout() {
  if (isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default AppLayout;
