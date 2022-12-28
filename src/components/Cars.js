import React, { Fragment } from 'react'
import Car from './Car'

const Cars = (props) => {
    return (
        <Fragment>
            <h4>Cars:</h4>
            {Object.keys(props.cars).map(carID => {
                return <Car
                    key={carID}
                    name={props.cars[carID].name}
                    price={props.cars[carID].price}
                    incrementPrice={() => props.incrementCarPrice(carID)}
                    decrementPrice={() => props.decrementCarPrice(carID)}
                />
            })}
        </Fragment>
    )
}

export default Cars