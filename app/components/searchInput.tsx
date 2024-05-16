import React from "react";
import items from "@/app/api/endpoints/items.json";

const SearchInput = () => {
    return (
        <div>
            {items.map((item, i) => {
                return (
                    <>
                        <div key={i} className="cart">
                            <h1 className="text-3xl font-bold underline">{item.name}</h1>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default SearchInput;
