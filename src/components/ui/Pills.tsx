import React from "react";

type PillsProps = {
  label: string;
};

const Pills: React.FC<PillsProps> = ({ label }) => {
  return (
    <div className="px-3 py-1 text-[12px]  text-green-900 border border-green-300 bg-green-100  rounded-[1000px] cursor-pointer hover:bg-green-600 hover:text-purple-100 justify-center items-center flex">
      {label}
    </div>
  );
};

export default Pills;
