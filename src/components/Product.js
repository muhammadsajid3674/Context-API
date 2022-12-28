import React from 'react'
import Cars from './Cars'

const ProductList = () => {
    return (
        <div className="product-list">
        <h2>Product list:</h2>
        {/* Pass props twice */}
        <Cars/>
        {/* Other potential product categories which we will skip for this demo: */}
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div>
    )
}

export default ProductList