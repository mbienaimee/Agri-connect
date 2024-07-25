import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { Cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(Cart.reduce((acc, curr) => acc + curr.Price, 0));
  }, [Cart]);
  console.log(Cart, totalCart);
  return (
    <div>
      <div className="flex p-24">
        {Cart && Cart.length ? (
          <>
            <div className="min-h-[80vh] gird md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-center p-3">
                {Cart.map((cartItem) => (
                  <cartTile cartItem={cartItem} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 ">
                <h1 className="font-bold text-lg text-red-800">
                  Your Cart Summary
                </h1>
                <p>
                  <span className="text-gray-800 font-bold">Total Items</span>
                  <span>:{Cart.length}</span>
                </p>
                <p>
                  <span className="text-gray-800 font-bold">Total Amount</span>
                  <span>:{totalCart}</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2 ">
              Your Cart is Empty
            </h1>
            <Link to="/Shop">
              <button className="bg-[#45AB49] text-white border-2 rounded-lg font-bold p-4">
                SHOP NOW
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
