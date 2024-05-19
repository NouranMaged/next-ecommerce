import React from "react";
import items from "@/app/api/endpoints/items.json";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full">
      {items.map((item, i) => {
        return (
          <div className="min-w-0.5"  key={i} >
            <div className="p-3 bg-white shadow rounded-lg">
              <h2 className="bg-sky-200  font-bold underline">
                {item.name}
              </h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              {/* <button onClick={handleAddToCart}>Add To Cart</button> */}
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
