import React from "react";
import { toast } from "react-toastify";

const CartSection = ({ selected, setSelected }) => {
  let Total = () => {
    let total = 0;
    selected.map((info) => (total = total + info.price));
    return total;
  };
  console.log(Total());

  const clearAll = () => {
    setSelected([]);
    toast.success("check out successful", {
      position: "top-center",
      theme: "colored",
    });
  };

  const handleRemove = (id) => {
    setSelected((prev) => prev.filter((item) => item.id !== id));
    toast.error("Card Item Reomved ");
  };
  return (
    <>
      <div className="container my-30 mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Your Cart</h2>

        <div className="space-y-3 mb-6">
          {selected.map((item, ind) => (
            <div
              key={ind}
              className="flex items-center justify-between bg-slate-50/70 p-4 rounded-xl border border-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl border border-slate-100 shadow-sm">
                  <img src={item.image} alt="" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-pink-500 hover:text-pink-600 text-sm font-semibold transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-slate-400 text-sm font-medium">Total:</span>
          <span className="text-2xl font-bold text-slate-900">${Total()}</span>
        </div>

        <button
          onClick={clearAll}
          className="w-full bg-[#7c24f6] hover:bg-[#681cd4] text-white text-sm font-medium py-3.5 rounded-full transition-colors duration-200"
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default CartSection;
