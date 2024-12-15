import React, { useState } from "react";

const NewsLetter: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };
  return (
    <section
      id="getStarted"
      className=" w-[100%] h-[500px] flex items-center justify-center bg-green-50"
    >
      <div className="w-[80%]  h-[200px]  border-green-900 border   rounded-xl   md:flex  justify-center items-center">
        <div className="  flex flex-col items-center  md:flex-row justify-center  md:gap-40 pt-5 md:pt-0 ">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-[20px] md:text-[40px] font-extrabold">
              Stay Conneted.
            </h1>
            <h2 className="text-[10px] md:text-[16px] font-normal">
              Subcribe to our newsletter and stay up to date!
            </h2>
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center gap-2 w-[70%] md:w-[45%] py-8 md:ml-0">
            <input
              type="email"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-black md:px-[30px] md:pr-[90px] py-1 md:py-4 mb-2 md:mb-0 rounded-lg ml-[10px] md:ml-0 text-[12px] "
            />
            <div className="bg-black py-2 px-[8px] md:px-10 md:py-[18px] rounded-[10px] text-white cursor-pointer hover:bg-purple-200 hover:text-purple-600  flex justify-center items-center text-[10px] md:text-[14px]">
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
