import { ReactNode } from "react";

const MainContent: React.FC<{
  children: ReactNode;
  isSmallNavOpen: boolean;
  isLargeNavOpen: boolean;
}> = ({ children, isSmallNavOpen, isLargeNavOpen }) => {
  return (
    <div
      className={`min-h-screen bg-white !font-inter ${
        isSmallNavOpen
          ? "m-0 h-full md:h-screen overflow-hidden md:overflow-visible"
          : ""
      } ${
        isLargeNavOpen ? "md:ml-[300px]" : ""
      } transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default MainContent;
