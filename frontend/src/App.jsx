import {Route, Routes} from 'react-router'
import Homepage from './pages/Homepage'
import AllProducts from './pages/AllProducts'
import CreateProduct from './pages/CreateProduct'
import UpdateProduct from './pages/UpdateProductPage'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'

function App(){
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage></Homepage>}/>
                <Route path="/products" element={<AllProducts></AllProducts>}/>
                <Route path="/create-product" element={<CreateProduct></CreateProduct>}/>
                <Route path="/products/:productId/edit" element={<UpdateProduct></UpdateProduct>}/>
                <Route path="/products/:productId" element={<ProductDetails></ProductDetails>}/>
            </Routes>
        </div>
    )
}

export default App