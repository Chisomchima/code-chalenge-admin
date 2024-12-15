import React from "react";
import { Link } from "react-router-dom";

interface LinksProps {
  direction?: "row" | "column" | "col";
  toggle: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Links: React.FC<LinksProps> = ({
  direction = "row",
  toggle,
  setToggle,
}) => {
  const links = [
    {
      title: "Find Events",
      path: "/events",
    },
    {
      title: "Create Event",
      path: "/create-event",
    },
  ];

  return (
    <>
      {direction === "row" && !toggle ? (
        <div className="flex items-center justify-center gap-5">
          {links.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="px-3 py-2 hover:bg-gray-100 rounded-full text-green-800 font-normal"
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-gray-800 text-white px-3 py-[6px] hover:bg-gray-600 rounded"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-800 text-white px-3 py-[6px] hover:bg-green-900 rounded"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="p-6 bg-[#F3F8FF] w-[250px] h-200px fixed top-[73px] right-0 z-50">
          <div className="flex flex-col items-start gap-5">
            {links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="hover:bg-slate-600 w-full py-4 rounded-lg"
                onClick={() => {
                  if (setToggle) {
                    setToggle(false);
                  }
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
