import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {

  const navigate = useNavigate();
  const[error, setError] = useState("");
  const [file,setFile] = useState("");
  const [productName,setProductName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState(0);
  const [quantity,setQuantity] = useState(0);
  const [category,setCategory] = useState("");

  const validateForm = ()=>{
    const newErrors = {};

    if (
      (file === "" || productName === "" || description === "",
      price === "",
      quantity === "",
      category === "")
    ) {
      setError("please fill all fields");
    }

    if(price < 0){
      newErrors.price = "Price must be greater than 0";
    }
    if(quantity < 0){
      newErrors.quantity = "quantity must be greater than 0"
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmitProduct = async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.post("https://agri-sales-backend-7.onrender.com/api/agri-sales/products/addProduct",{
      file,
      productName,
      description,
      price,
      quantity,
      category
    })
    if(response){
      alert("you've successfully added product")
      setFile(""),
      setProductName(""),
      setDescription(""),
      setPrice(0),
      setQuantity(0),
      setCategory("");

    }
    
    setTimeout(()=>{
      navigate('/products')
    },3000)
  }catch(err){
    console.log("internal server error", err)
  }


  }
  return (
    <div className="w-[70vw] flex items-center justify-center flex-col py-4 rounded-lg">
      <div className=" flex flex-col justify-center items-center border">
        <div className="h-[40vh] w-full">
          <img
            src="Stock.jpg"
            className="w-full h-full brightness-75 rounded-t-lg pb-5"
          />
        </div>
        <div className="w-[45%]">
          <form
            onSubmit={handleSubmitProduct}
            className="flex flex-col gap-4 w-full items-center px-5"
          >
            <input
              type="file"
              name="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="productName..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-[19vw] shadow-lg bg-white px-4 py-2"
              />
              <input
                type="text"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[19vw] shadow-lg bg-white px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <input
              type="text"
              placeholder="product in stock..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <input
              type="text"
              placeholder="category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <button
              type="submit"
              className="bg-[#45AB49] px-5 py-2 rounded-lg font-medium text-white"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct
