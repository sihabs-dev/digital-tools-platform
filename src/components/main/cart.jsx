import React, { useState } from "react";
import CartCard from "./cartCard";

const Cart = ({ cartArr, setCartArr, total, setTotal }) => {
  return (
    <div>
      {cartArr.length ? (
        <CartCard
          cartArr={cartArr}
          setCartArr={setCartArr}
          total={total}
          setTotal={setTotal}
        />
      ) : (
        <div className="text-5xl font-bold text-center p-12 my-10 bg-[#F9FAFC] rounded-2xl border-2 border-gray-200">
          <h1>No Card Select Yet!</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
