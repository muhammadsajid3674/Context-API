import React, { Fragment } from 'react'
import MyContext from '../Context/MyContext'
import Car from './Car'

const Cars = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <Fragment>
                    <h4>Cars:</h4>
                    {Object.keys(context.cars).map(carID => {
                        return <Car
                            key={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            incrementPrice={() => context.incrementCarPrice(carID)}
                            decrementPrice={() => context.decrementCarPrice(carID)}
                        />
                    })}
                </Fragment>
            )}
        </MyContext.Consumer>
    )
}

export default Cars