import React, { use } from "react";
import Card from "./card";

const CardContainer = ({ cardDataPromise }) => {
  const dataArr = use(cardDataPromise);
  const allCard = dataArr.map((item) => (
    <Card key={item.id} item={item}></Card>
  ));
  return (
    <section>
      <div className=" border-2 border-gray-100 p-0.5 rounded-4xl w-fit mx-auto">
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl border-none ">
          Products
        </button>
        <button className="btn bg-white rounded-4xl border-none">Cart(2)</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {allCard}
      </div>
    </section>
  );
};

export default CardContainer;
