import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);
  let index = 1;

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/agri-sales/products/productList');
      setProducts(response.data.getProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (productId) => {
    try {
      await axios.put(`http://localhost:3001/api/agri-sales/products/updateProduct/${productId}`);
      fetchData(); // Optionally refetch data to update the UI
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/agri-sales/products/delete/${id}`);
      fetchData(); // Refetch data to update the UI after deletion
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between py-6 text-lg">
        <strong className="font-semibold">Products</strong>
        <Link
          to={"/addproduct"}
          className="bg-[#45AB49] py-2.5 px-4 rounded-md font-semibold text-white"
        >
          Add Product
        </Link>
      </div>
      <div className="mt-3">
        <table className="w-full text-gray-700 h-[50vh]">
          <thead className="bg-black text-white border-2">
            <tr className="p-9">
              <td>Product Id</td>
              <td>Product Name</td>
              <td>Price</td>
              <td>Category</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="border-2">
            {products.map((product) => (
              <tr key={product._id} className="p-9 border">
                <td>
                  <Link
                    to={`/products/${product._id}`}
                    className="font-semibold text-xl"
                  >
                    {index++}
                  </Link>
                </td>
                <td>
                  <Link to={`/products/${product.productName}`}>
                    {product.productName}
                  </Link>
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td className="flex">
                  <Link to={`/update/${product._id}`}>
                    <MdEdit fontSize={26} className="text-[blue]" />
                  </Link>
                  <span onClick={() => handleDelete(product._id)}>
                    <MdDelete fontSize={25} className="text-[red]" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
