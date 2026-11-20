import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router"
import { updateProduct, getProductById } from "../../services/productServices"

function UpdateProductPage() {
  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
    category: '',
    price: 0,
    quantity: 0
  })
  const {productId} = useParams()

      async function loadProduct(){
        const response = await getProductById(productId)
        setFormData(response)
    }

  const navigate = useNavigate()

  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault()

    const updatedProduct = await updateProduct(productId,formData)

    navigate('/products')
  }

      useEffect(() => {
      loadProduct()
    }, [])

 return (
    <div>

            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            />

            <label htmlFor="description">Description:</label>
            <input 
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
             />

            <label htmlFor="breed">Category:</label>
            <input 
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
             />

            <label htmlFor="price">Price:</label>
            <input 
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
             />
            <label htmlFor="quantity">Quantity:</label>
            <input 
            type="number"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
             />

             <button>Update Product</button>
        </form>
    </div>
  )

}

export default UpdateProductPage