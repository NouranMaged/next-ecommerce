import React from 'react'
import items from "@/app/api/endpoints/items.json";

const HomePage = () => {
  return (
    <div>{items.map((item,i)=>{
        return (
            <>
              <div key={i} className="p-3 bg-white shadow rounded-lg">
                    <h2 className="bg-sky-200 text-3xl font-bold underline">
                        {item.name}
                    </h2>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>{" "}
            </>
        );
    })}</div>
  )
}

export default HomePage