import ItemCart from "@/app/components/itemCart";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { useRouter } from "next/router";
import React from "react";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const store = useAppStore();
  const { cartItems } = useAppSelector((state) => state.cartHook);
  const router = useRouter();

  return (
    <>
      <p>Check You Cart Items: </p>
      <div className="flex justify-between w-full gap-5 m-1">
        {cartItems.length !== 0 ? (
          <div>
            {cartItems.map((item, i) => {
              return <ItemCart item={item} key={i} />;
            })}
            <div className="flex gap-5">
              <button
                onClick={() => router.push("/")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Go to Home Page
              </button>
              <button
                onClick={() => router.push("/checkout")}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p>
            No Items Added yet to your cart{" "}
            <a href="./" className="underline">
              Go to Home Page !
            </a>{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default CartPage;
