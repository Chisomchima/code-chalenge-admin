import React from "react";
import { DotLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-co-primary flex items-center justify-center z-50">
      <div className="backdrop-blur-md bg-white/30 p-10 rounded-lg shadow-lg">
        <DotLoader color="#F2E3FF" size={60} />
      </div>
    </div>
  );
};

export default Loader;
