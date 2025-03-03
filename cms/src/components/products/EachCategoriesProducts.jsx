import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IsLoading from '../IsLoading'

const EachCategoriesProducts = () => {
    const {category}= useParams()
    
    const [categoryProducts, setCategoryProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate= useNavigate()
    const fetchCategoryProducts = async () => {
        try {
            setLoading(true)
            const response= await axios({
                method:"GET",
                url:`https://boat-lifestyle-server.onrender.com/api/products/category/${category}`,
            })
            setCategoryProducts(response.data)
            
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchCategoryProducts()
    },[category])

    const handleAddProduct = () => {
      navigate(`/products/admin/${category}`)
    }
    if(loading){
        return <IsLoading/>
    }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products in {category}</h2>
        
        {/* Add New Product Button */}
        <button 
            onClick={handleAddProduct}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add New Product
        </button>
    </div>
    
    <div className="overflow-x-auto">
        <table className="w-full table-auto">
            <thead>
                <tr className="bg-blue-500 text-white">
                    <th className="px-4 py-3 text-left">Image</th>
                    <th className="px-4 py-3 text-left">Product Name</th>
                    <th className="px-4 py-3 text-left">Original Price</th>
                    <th className="px-4 py-3 text-left">Price</th>
                    <th className="px-4 py-3 text-left">Stock</th>
                </tr>
            </thead>
            <tbody>
                {categoryProducts.length > 0 ? (
                    categoryProducts.map((product) => (
                        <tr key={product._id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-16 h-16 object-cover rounded"
                                />
                            </td>
                            <td className="px-4 py-3 font-medium text-gray-800">{product.name}</td>
                            <td className="px-4 py-3 text-gray-500 line-through">₹{product.beforeOfferPrice}</td>
                            <td className="px-4 py-3 font-medium text-green-600">₹{product.price}</td>
                            <td className="px-4 py-3">
                                {product.stock > 0 ? (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                        In Stock ({product.stock})
                                    </span>
                                ) : (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                                        Out of Stock
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-gray-500 italic">No products found in this category.</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default EachCategoriesProducts