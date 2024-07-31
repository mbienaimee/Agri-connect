import { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClient] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/agri-sales/users/client');
      
      setClient(response.data || []);
    } catch (error) {
      console.log(error);
      setClient([]);
    }
  };

  useEffect(() => {
    fetchMessages();  
  }, []);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between py-6 text-lg">
        <strong className="font-semibold">Clients</strong>
      </div>
      <div className="mt-3">
        <table className="w-full text-gray-700 h-[50vh]">
          <thead className="bg-black text-white border-2">
            <tr className="p-9">
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>role</td>
            </tr>
          </thead>
          <tbody className="border-2">
            {clients.length > 0 ? (
              clients.map((client, index) => (
                <tr key={client._id} className="p-9 border">
                  
                  <td>{index + 1}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No clients available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
