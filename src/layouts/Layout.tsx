import { Box } from "@mui/material";
import { ReactNode, useState } from "react";
import Nav from "../components/layout/nav";
import Header from "../components/layout/header";
import MainContent from "../components/layout/main-content";
import DashboardFooter from "../components/layout/footer/dashboard";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openLargeNav, setOpenLargeNav] = useState(true);
  const [openSmallNav, setOpenSmallNav] = useState(false);

  return (
    <Box>
      <Nav
        large={openLargeNav}
        small={openSmallNav}
        closeLargeNav={() => setOpenLargeNav(false)}
        closeSmallNav={() => setOpenSmallNav(false)}
      />
      <Box>
        <Header
          small={openSmallNav}
          large={openLargeNav}
          openSmallClick={() => setOpenSmallNav(!openSmallNav)}
          openLargeClick={() => setOpenLargeNav(!openLargeNav)}
        />
        <Box>
          <MainContent
            isSmallNavOpen={openSmallNav}
            isLargeNavOpen={openLargeNav}
          >
            {children}
          </MainContent>
          <DashboardFooter isLargeNavOpen={openLargeNav} />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
