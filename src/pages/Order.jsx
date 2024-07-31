import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    try {
      const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      // Sort orders with 'Pending' status first
      const sortedOrders = storedOrders.sort((a, b) => (a.status === 'Pending' ? -1 : 1) - (b.status === 'Pending' ? -1 : 1));
      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching orders", error);
      setOrders([]);
    }
  };

  const markAsCompleted = (index) => {
    try {
      const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      storedOrders[index].status = 'Completed';
      localStorage.setItem('orders', JSON.stringify(storedOrders));
      fetchOrders();  // Refresh the orders list
    } catch (error) {
      console.error("Error updating order status", error);
    }
  };

  useEffect(() => {
    fetchOrders();  
  }, []);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between py-6 text-lg">
        <strong className="font-semibold">Orders</strong>
      </div>
      <div className="mt-3">
        <table className="w-full text-gray-700 h-[50vh]">
          <thead className="bg-black text-white border-2">
            <tr className="p-4">
              <th className="p-2">Id</th>
              <th className="p-2">Items</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Total Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{order.items.map(item => item.name).join(", ")}</td>
                  <td className="p-2">{order.phoneNumber}</td>
                  <td className="p-2">${order.totalAmount.toFixed(2)}</td>
                  <td className="p-2">{new Date(order.createdAt).toLocaleString()}</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">
                    {order.status === 'Pending' && (
                      <button
                        onClick={() => markAsCompleted(index)}
                        className="bg-blue-500 text-white p-2 rounded"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">No orders available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
