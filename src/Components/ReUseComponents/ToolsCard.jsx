import React, { use } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const ToolsCard = ({ LoadDataPromise, setSelected, selected }) => {
  const Data = use(LoadDataPromise);

  let selectedData = (item) => {
    console.log(item.id);
    const found = selected.find((data) => data.id === item.id);
    found
      ? toast.warn("Already added")
      : (setSelected([...selected, item]), toast.success("Added successfully"));
  };

  return (
    <>
      {Data.map((item) => {
        const SelectedButton = selected.find((data) => data.id === item.id);
        return (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
          >
            <div
              className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold
      ${
        item.tagType === "popular"
          ? "bg-green-50 text-green-600"
          : item.tagType === "new"
            ? "bg-yellow-50 text-red-600"
            : "bg-red-50 text-purple-600 "
      }`}
            >
              {item.tag}
            </div>

            <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-2xl mb-6 border border-slate-100">
              <img src={item.image} alt="" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {item.name}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-slate-900">
                ${item.price}
              </span>
              <span className="text-slate-500 text-sm ml-1">
                /{item.period}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {item.features.map((data, ind) => (
                <div
                  key={ind}
                  className="flex items-center gap-3 text-slate-600 text-sm"
                >
                  <Check size={18} className="text-emerald-500 stroke-[3px]" />
                  <li> {data}</li>
                </div>
              ))}
            </ul>
            <button
              onClick={() => selectedData(item)}
              className={`w-full bg-linear-to-r hover:scale-105 text-white font-medium py-3.5 rounded-full transition-colors duration-300 cursor-pointer ${SelectedButton ? "from-indigo-500 to-green-500" : "from-indigo-500 to-purple-500"}`}
            >
              {SelectedButton ? (
                <span className="flex justify-center items-center gap-2">
                  <IoCheckmarkDoneCircleSharp />{" "}
                  <p> Add To Cart Successfully</p>{" "}
                </span>
              ) : (
                " Buy Now"
              )}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ToolsCard;
