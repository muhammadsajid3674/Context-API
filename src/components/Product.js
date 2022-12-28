import React from 'react'
import Cars from './Cars'

const ProductList = (props) => {
    return (
        <div className="product-list">
        <h2>Product list:</h2>
        {/* Pass props twice */}
        <Cars
            cars={props.cars}
            incrementCarPrice={props.incrementCarPrice}
            decrementCarPrice={props.decrementCarPrice}
        />
        {/* Other potential product categories which we will skip for this demo: */}
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div>
    )
}

export default ProductList