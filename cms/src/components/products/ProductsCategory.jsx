import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard';

const ProductsCategory = () => {
    const [productCategory, setProductCategory] = useState([]);

    const fetchProductCategory = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://boat-lifestyle-server.onrender.com/api/products/categories",
                headers: {"Content-Type":"application/json"}
            })

            setProductCategory(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProductCategory();
    }, [])

  return (
    <>
    {productCategory.map((category, ind)=>(
        <CategoriesCard category={category} key={ind}/>
    ))}
    </>
  )
}

export default ProductsCategory