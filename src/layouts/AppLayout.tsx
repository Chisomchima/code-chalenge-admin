import { Outlet } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import Layout from "./Layout";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default AppLayout;
