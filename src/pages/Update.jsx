import React from "react";
import { useParams } from "react-router-dom";

function Update() {

    // const {id} = useParams();

    // useEffect(()=>{
    //     axios.get()
    // })
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <form
        action=""
        className="w-[60vw] h-[50vh] flex flex-col gap-6 bg-[#45AB49] justify-center items-center p-5 rounded-xl"
      >
        <input
          type="text"
          placeholder="Product"
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <input
          type="text"
          placeholder="price"
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <input
          type="text"
          placeholder="product in stock"
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <button type="submit" className="bg-black px-6 py-2.5 text-white rounded-2xl font-medium text-lg">Update</button>
      </form>
    </div>
  );
}

export default Update;
