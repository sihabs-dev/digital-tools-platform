import React from "react";

const CartCard = ({ cartArr, setCartArr, total, setTotal }) => {
  const handleRemove = (item) => {
    const filterCartArr = cartArr.filter((cart) => cart.id != item.id);
    setCartArr(filterCartArr);
    setTotal((prev) => prev - item.price);
  };
  function handleCheckOut() {
    setCartArr([]);
    setTotal(0);
  }
  return (
    <div className="my-7 space-y-6 border-2 border-gray-100 p-2 sm:p-10 rounded-2xl">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {cartArr.map((item) => {
        return (
          <div className="flex justify-between items-center bg-[#F9FAFC] p-5 rounded-2xl">
            <div className="flex gap-3 items-center">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-[#627382]">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item)}
              className="text-[#FF3980] btn bg-[#f9fafc]"
            >
              Remove
            </button>
          </div>
        );
      })}
      <div>
        <div className="flex justify-between mb-3 px-5">
          <p>Total:</p>
          <p className="text-[#101727] text-xl">${total}</p>
        </div>
        <button
          onClick={handleCheckOut}
          className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-4xl"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCard;
