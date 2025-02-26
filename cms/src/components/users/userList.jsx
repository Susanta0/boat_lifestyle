import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loginStatus } = useContext(AuthContext);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");

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
  const deleteUser = async (_id) => {
    try {
      setLoading(true);
      await axios({
        method: "DELETE",
        url: `https://boat-lifestyle-server.onrender.com/api/users/users/${_id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginStatus.token}`,
        },
      });
      fetchUsers();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Open Dialog for Role Change
  const openEditDialog = (user) => {
    setSelectedUser(user);
    setNewRole(user.role);
  };

  // Close Dialog
  const closeDialog = () => {
    setSelectedUser(null);
    setNewRole("");
  };

  // edit user
  const editUserRole = async () => {
    if (!selectedUser) return;
    try {
      setLoading(true);
      await axios({
        method: "PUT",
        url: `https://boat-lifestyle-server.onrender.com/api/users/users/${selectedUser._id}/role`,
        data: { role: newRole },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginStatus.token}`,
        },
      });
      fetchUsers();
      closeDialog();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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
                <td
                  onClick={() => openEditDialog(user)}
                  className="px-6 py-4 whitespace-nowrap text-blue-600 hover:font-bold cursor-pointer"
                >
                  Edit
                </td>
                <td
                  onClick={() => deleteUser(user._id)}
                  className="px-6 py-4 whitespace-nowrap text-red-600 hover:font-bold cursor-pointer"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Role Change Dialog */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">Edit User Role</h2>
            <p className="mb-2">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="mb-4">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role:
            </label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeDialog}
                className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={editUserRole}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
