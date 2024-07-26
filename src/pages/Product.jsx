import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../pages/Store/slices/Cart-slice";

const products = [
  { src: "maize.jpg", alt: "maize", name: "Legumes", Price: "$2000", id: 1 },
  { src: "potato.jpg", alt: "potato", name: "Potatoes", Price: "$2000", id: 2 },
  { src: "orange.jpg", alt: "orange", name: "Orange", Price: "$2000", id: 3 },
  { src: "carrot.jpg", alt: "carrot", name: "Carrots", Price: "$2000", id: 4 },
  { src: "vegetables.jpeg", alt: "vegetables", name: "Vegetables", Price: "$2000", id: 5 },
  { src: "apples.png", alt: "apples", name: "Apples", Price: "$2000", id: 6 },
  { src: "eggs.jpg", alt: "eggs", name: "Eggs", Price: "$2000", id: 7 },
  { src: "brocolli.jpg", alt: "brocolli", name: "Broccoli", Price: "$2000", id: 8 },
  { src: "maize.jpg", alt: "maize", name: "Legumes", Price: "$2000", id: 9 },
  { src: "maize.jpg", alt: "maize", name: "Legumes", Price: "$2000", id: 10 },
];

const Product = () => {
  const dispatch = useDispatch();
  const Cart = useSelector(state => state.Cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    console.log("Removed");
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex flex-col w-full md:flex-wrap md:flex-row gap-7 py-20 text-lg justify-center">
      {products.map((product) => (
        <div key={product.id} className="md:w-[20%] w-full flex flex-col items-center">
          <div>
            <img
              src={product.src}
              alt={product.alt}
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
            />
            <div className="flex justify-around">
              <p className="flex justify-center">{product.name}</p>
              <p className="flex justify-center">{product.Price}</p>
            </div>
          </div>

          <button
            onClick={() =>
              Cart.some(item => item.id === product.id)
                ? handleRemoveFromCart(product.id)
                : handleAddToCart(product)
            }
            className="text-black border-1 rounded-lg font-bold p-2"
          >
            {Cart.some(item => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
