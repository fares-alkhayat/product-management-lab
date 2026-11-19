import { useParams, Link, useNavigate } from "react-router"
import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { getProductById, deleteProduct } from "../../services/productServices"

function ProductDetails() {
    const [ product, setProduct ] = useState([])
    const [ error, setError ] = useState(null)
    const { productId } = useParams()

    async function loadProduct(){
      try{
        const response = await getProductById(productId)
        setProduct(response)
      } catch (err) {
        setError(err.response.data.message)
      }
    }

        async function handleDeleteProduct(){
        await deleteProduct(productId)
        navigate('/products')
    }

    useEffect(()=>{
      loadProduct()
    },[])

    const navigate = useNavigate()

  return (
    <div>
        <h1>Product Details</h1>

        {product ? <>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>

            <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
            <button onClick={handleDeleteProduct}>Delete Product</button>
        </>: null}
        {/* <p className="error">{error}</p> */}
    </div>
  )
}

export default ProductDetails