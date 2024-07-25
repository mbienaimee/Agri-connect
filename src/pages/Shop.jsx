import React, { useEffect, useState } from "react";
import shop from "../../public/shop.jpg";
import shop1 from "../../public/shop1.png";
import shop2 from "../../public/shop2.png";
import shop3 from "../../public/shop3.png";
import shop4 from "../../public/shop4.png";
import shop5 from "../../public/shop5.png";
import axios from "axios";
import s1 from "../../public/s1.png";
import s2 from "../../public/s2.png";
import s3 from "../../public/s3.png";
import s4 from "../../public/s4.png";
import s5 from "../../public/s5.png";
import eggs from "../../public/eggs.jpg";
import apples from "../../public/apples.png";
import banana from "../../public/banana.jpg";
import ReactStars from "react-rating-stars-component";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const [harvests, setHarvest] = useState([]);
  const rating = 5;
  
const handleFetch = async()=>{
  await axios({
    method: "GET",
    url: "https://agri-sales-backend-7.onrender.com/api/agri-sales/products/productList",
    
  }).then((response)=>{
    console.log(response);
    setHarvest(response.data.getProduct);
  }).catch((error)=>{
    console.log(error);
  })
}

useEffect(()=>{
  handleFetch();
}, [])
 
  return (
    <>
      <div className="flex flex-col">
        <div>
          <div>
            <div
              style={{
                backgroundImage: `url(${shop})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                top: 0,
                left: 0,
                height: "80%",
                width: "100%",
              }}
              className=" border border-blue-950 pb-56"
            >
              <div className="mt-20">
                <h3 className="flex justify-center  text-white font-bold text-xl">
                  SHOP GRID
                </h3>
                <h3 className="flex justify-center"></h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex p-24 ">
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-[15rem] rounded-lg mt-[2rem] ml-[2rem] bg-white text-black  hover:green-600 font-bold h-[13rem]">
              <div>
                <img src={shop1} alt="" />
                <p className="flex justify-center"> Dried Products</p>
                <p className="flex justify-center font-normal">9 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-[15rem] rounded-lg mt-[2rem] ml-[2rem] bg-white text-black  hover:green-600 font-bold h-[13rem]">
              <div>
                <img src={shop2} alt="" />
                <p className="flex justify-center"> Fresh Meal</p>
                <p className="flex justify-center font-normal">4 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-[15rem] rounded-lg mt-[2rem] ml-[2rem] bg-white text-black hover:green-600 font-bold h-[13rem]">
              <div>
                <img src={shop3} alt="" />
                <p className="flex justify-center"> Juice</p>
                <p className="flex justify-center font-normal">9 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-[15rem] rounded-lg mt-[2rem] ml-[2rem] bg-white text-black hover:green-600 font-bold h-[13rem]">
              <div>
                <img src={shop4} alt="" />
                <p className="flex justify-center"> Vegetables</p>
                <p className="flex justify-center font-normal">3 products</p>
              </div>
            </div>
            <div className="border-2 hover:border-green-600 transform duration-500 ease-in-out w-[15rem] rounded-lg mt-[2rem] ml-[2rem] bg-white text-black  hover:green-600 font-bold h-[13rem]">
              <div>
                <img src={shop5} alt="" />
                <p className="flex justify-center"> Beverages</p>
                <p className="flex justify-center font-normal">2 products</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-urbanist font-bold flex justify-center mb-4 text-2xl ">
            Unearth the toptier
          </p>
          <p className=" font-urbanist font-bold flex justify-center text-2xl">
            Organic Products from our specilaized Farmers
          </p>
        </div>
        <div>
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6 text-[#FF9C00] text-xl font-roboto mt-6">
              Shop Now
            </span>
          </span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center p-4">
          {harvests.map((harvest) => (
            <div key={harvest.id} className="flex flex-wrap w-[22%]">
              <img
                src={harvest.image.url}
                width={400} height={400}
              />
              <p>{harvest.productName}</p>
              <p>{harvest.description}</p>
              <p>${harvest.price}</p>
              <p>{harvest.productInstock}</p>
            </div>
          ))}
          {/* {/* <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={s1}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl className="">
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>
                <div className="flex justify-center">
                  <dd className="font-medium">Carrots</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $20 per(kg)
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={s2}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <div className="flex justify-center">
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#FF890B"
                  edit={false}
                />
              </div>
              <div className=" flex justify-center">
                <dd className="font-medium"> Fresh Gooseberry</dd>
              </div>
              <dl>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $24 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={s3}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>
                <div className="flex justify-center">
                  <dd className="font-medium">Organic Brocoli</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $23 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={s4}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>
                <div className="flex justify-center">
                  <dd className="font-medium">Citrus</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $26 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={s5}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>
                <div className="flex justify-center">
                  <dd className="font-medium">Brown Onions</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $24 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={eggs}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>
                <div className="flex justify-center">
                  <dd className="font-medium">Eggs</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $240 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>

          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={apples}
              className="h-56 w-full rounded-md object-cover  transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>{" "}
                <div className="flex justify-center">
                  <dt className="sr-only">Address</dt>

                  <dd className="font-medium">Apples</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $24 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a>

          <a
            href="#"
            className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={banana}
              className="h-56 w-full rounded-md object-cover transition-transform duration-300 transform hover:scale-110"
            />

            <div className="mt-2">
              <dl>
                <div className="flex justify-center">
                  <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    activeColor="#FF890B"
                    edit={false}
                  />
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Address</dt>

                  <dd className="font-medium">Banana</dd>
                </div>
                <div className="flex justify-center">
                  <dt className="sr-only">Price</dt>

                  <dd className="text-sm font-semibold text-green-500">
                    $19 per kg
                  </dd>
                </div>
                <div className="flex justify-end ">
                  <a href="/Login">
                    <FaCartShopping />
                  </a> 
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs"></div>
            </div>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Shop;
