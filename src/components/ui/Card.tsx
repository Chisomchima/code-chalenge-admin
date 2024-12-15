import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  imageUrl: string;
  status: string;
  title: string;
  time: string;
  price: string;
  id: string | number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  status,
  title,
  time,
  price,
  id,
}) => {
  return (
    <Link
      to={`/event/${id}`}
      state={{ imageUrl, status, title, time, price, }}
      className="h-[380px] w-[400px] cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg"
    >
      <div className="relative h-[40%] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt="Event Background"
          className="rounded-lg object-cover w-full h-[250px]"
        />
      </div>
      <div className="h-[60%] w-full p-2 grid gap-y-4 pt-3">
        <div className="w-max py-[5px] h-max bg-green-300 rounded font-semibold px-2 text-[12px] flex items-center justify-center">
          {status}
        </div>
        <p className="text-[18px] font-medium text-gray-700">{title}</p>
        <p className="text-[14px] font-medium text-gray-600">{time}</p>
        <p className="text-[14px] font-medium text-gray-600">{price}</p>
      </div>
    </Link>
  );
};

export default Card;
