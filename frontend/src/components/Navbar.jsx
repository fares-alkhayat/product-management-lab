import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>All Products</Link>
        <Link to='/create-product'>Create a Product</Link>
    </nav>
  )
}

export default Navbar