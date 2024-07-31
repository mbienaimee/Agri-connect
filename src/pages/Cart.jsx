import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const CartTile = ({ cartItem }) => {
  return (
    <div key={cartItem.id} className="flex flex-col items-center p-3">
      <img src={cartItem.src} alt={cartItem.alt} className="w-full" />
      <div className="flex justify-around">
        <p>{cartItem.name}</p>
        <p>{cartItem.Price}</p>
      </div>
    </div>
  );
};

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalCart(Cart.reduce((acc, curr) => acc + parseFloat(curr.Price.replace('$', '')), 0));
  }, [Cart]);

  const handlePayment = () => {
    try {
      const newOrder = {
        items: Cart,
        phoneNumber: phoneNumber,
        totalAmount: totalCart,
        createdAt: new Date().toISOString(),
        status: 'Pending'  // Add status field
      };

      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));

      dispatch({ type: 'CLEAR_CART' });

      setPaymentStatus("Payment successful!");
    } catch (error) {
      console.error("Error saving the order", error);
      setPaymentStatus("Payment failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex p-24">
        {Cart && Cart.length ? (
          <>
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-center p-3">
                {Cart.map((cartItem) => (
                  <CartTile key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg text-red-800">
                  Your Cart Summary
                </h1>
                <p>
                  <span className="text-gray-800 font-bold">Total Items</span>
                  <span>: {Cart.length}</span>
                </p>
                <p>
                  <span className="text-gray-800 font-bold">Total Amount</span>
                  <span>: ${totalCart.toFixed(2)}</span>
                </p>
                <div className="flex flex-col space-y-3">
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border p-2 rounded"
                  />
                  <button
                    onClick={handlePayment}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    Pay ${totalCart.toFixed(2)}
                  </button>
                </div>
                <div className="mt-5">
                  {paymentStatus && (
                    <p className="text-green-500 font-bold mt-3">{paymentStatus}</p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
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
