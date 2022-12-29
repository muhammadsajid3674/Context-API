import React, { Fragment } from "react"

class CountClass extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }
    increase() {
        this.setState({ count: this.state.count + 1 })
    }
    decrease() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </Fragment>
        )
    }
}

export default CountClass;