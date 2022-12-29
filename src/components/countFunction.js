import React, { Fragment, useState } from 'react'

const CountFunction = () => {

    const [count, setCount] = useState(0)

    let increase = () => {
        setCount(count + 1)
    }
    let decrease = () => {
        setCount(count - 1)
    }

  return (
    <Fragment>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </Fragment>
  )
}

export default CountFunction;