import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loginStatus } = useContext(AuthContext);

  // get users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: "GET",
        url: "https://boat-lifestyle-server.onrender.com/api/users/users",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginStatus.token}`,
        },
      });
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // delete user
  const deleteUser= async()=>{
    try {
      setLoading(true)
      const response= await axios({
        method:"DELETE",
        url:"https://boat-lifestyle-server.onrender.com/api/users/users/:userId",
      })
      console.log(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif?v=1670845994"
              alt="boat-gif"
            />
          </div>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Denger
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                  Edit
                </td>
                <td onClick={deleteUser} className="px-6 py-4 whitespace-nowrap text-red-600">
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserList;
