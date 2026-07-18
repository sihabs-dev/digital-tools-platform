import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import Badge from "./badge";
import { toast } from "react-toastify";

const Card = ({ item, setCartArr, setTotal }) => {
  const { id, name, description, price, period, tag, tagType, features, icon } =
    item;
  const [isBuy, setIsBuy] = useState("Buy Now");
  const handleCartArr = (product) => {
    setIsBuy("add to cart");
    setCartArr((prev) => [...prev, product]);
    setTotal((prev) => prev + product.price);
    toast.success(`${product.name}, successfully add to cart!`);
  };
  return (
    <div className="border-2 border-[#F2F2F2] rounded-2xl p-3 sm:p-5 space-y-3  relative">
      <div className="w-16 h-16 flex justify-center items-center text-3xl  border-2 border-[#f2f2f2] rounded-full">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-[#101727]">{name}</h2>
      <p className="text-[#627382] leading-5">{description}</p>
      <h3>
        <span className="text-2xl text-[#101727] font-bold">${price}</span>
        <span className="text-[#627382]">/{period}</span>
      </h3>
      <div className="text-[#627382] leading-5">
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex items-center gap-0.5">
              <IoCheckmark className="text-green-400" /> <p>{feature}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => handleCartArr(item)}
        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-4xl"
      >
        {isBuy}
      </button>
      <div className="absolute top-2 right-2">
        <Badge tag={tag} />
      </div>
    </div>
  );
};

export default Card;
