import React from "react";
import { ShoppingCart } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm my-30">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Your Cart</h2>

      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <ShoppingCart size={48} strokeWidth={1} className="mb-4" />
        <p className="text-sm font-medium">Your cart is empty</p>
      </div>
    </div>
  );
};

export default EmptyCart;
