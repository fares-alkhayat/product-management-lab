import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getAllProducts } from '../../services/productServices'

function AllProducts() {

    const [ products, setProducts ] = useState([])
    const [ error, setError ] = useState(null)

    async function loadProducts(){
      try{
        const response = await getAllProducts()
        setProducts(response)
      } catch (err) {
        setError(err.response.data.message)
      }
    }

    useEffect(()=>{
      loadProducts()
    },[])

  return (
    <div>
      <h1>All Products</h1>

        {products.map((oneProduct)=>
        <div key={oneProduct._id}>
        <p>Name: {oneProduct.name}</p>
        <Link to={`/products/${oneProduct._id}`}>See Details</Link>
        </div>
        )}

        <p>{error}</p>
    </div>
  )
}

export default AllProducts