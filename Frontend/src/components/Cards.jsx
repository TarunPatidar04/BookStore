import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 dark:bg-slate-900 dark:text-white">
        <div className="card w-80 ml-7 p-3 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure>
            <img src={item.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary"> {item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{`$${item.price}`}</div>
              <div className="rounded-lg  border-[2px] cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
