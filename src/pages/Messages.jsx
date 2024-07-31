import { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/agri-sales/messages/Allmessages');
      
      setMessages(response.data || []);
    } catch (error) {
      console.log(error);
      setMessages([]);
    }
  };

  useEffect(() => {
    fetchMessages();  
  }, []);

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between py-6 text-lg">
        <strong className="font-semibold">Messages</strong>
      </div>
      <div className="mt-3">
        <table className="w-full text-gray-700 h-[50vh]">
          <thead className="bg-black text-white border-2">
            <tr className="p-9">
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Message</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody className="border-2">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <tr key={message._id} className="p-9 border">
                  
                  <td>{index + 1}</td>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                  <td>{new Date(message.createdAt).toLocaleString()}</td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No messages available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
