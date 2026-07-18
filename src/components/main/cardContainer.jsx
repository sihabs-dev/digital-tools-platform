import React, { use, useState } from "react";
import Card from "./card";
import Cart from "./cart";

const CardContainer = ({ cardDataPromise, cartArr, setCartArr }) => {
  const dataArr = use(cardDataPromise);
  const allCard = dataArr.map((item) => (
    <Card key={item.id} item={item} setCartArr={setCartArr}></Card>
  ));
  let [selected, setSelected] = useState("products");
  function handleSelected(select) {
    setSelected(select);
  }
  return (
    <section>
      <div className=" border-2 border-gray-100 p-0.5 rounded-4xl w-fit mx-auto">
        <button
          onClick={() => handleSelected("products")}
          className={`btn ${selected == "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white"}  rounded-4xl border-none `}
        >
          Products
        </button>
        <button
          onClick={() => handleSelected("cart")}
          className={`btn ${selected == "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white"} rounded-4xl border-none`}
        >
          Cart(2)
        </button>
      </div>
      {selected == "products" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {allCard}
        </div>
      ) : (
        <Cart cartArr={cartArr} setCartArr={setCartArr} />
      )}
    </section>
  );
};

export default CardContainer;
