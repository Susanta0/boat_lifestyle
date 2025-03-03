import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import axios from 'axios'
import IsLoading from '../components/IsLoading'
const UserDetails = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const {loginStatus}=useContext(AuthContext)

    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await axios({
                method: 'get',
                url: 'https://boat-lifestyle-server.onrender.com/api/users/profile',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${loginStatus.token}`
                }
            })
            setUser(response.data)
            setLoading(false)
            
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        fetchUser()
    }, [])
  return (
    <>
    {loading ? (
        <IsLoading/>
    ) : (
        
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/icons8-user-64.png" alt="Admin Logo" className="w-16 h-16 rounded-full" />
        </div>
  
        {/* Admin Details */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <span className="inline-block mt-2 px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg">
            {user.role}
          </span>
        </div>
      </div>

    )}
    </>
  )
}

export default UserDetails