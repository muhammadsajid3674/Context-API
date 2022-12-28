import React, { Component } from 'react'
import MyContext from './MyContext';

class MyProvider extends Component {
    state = {
        tableHead: {
            stdHead: [ 'Name', 'Email', 'Age', 'Gender'],
        },
        std: {
            std001: { name: 'Sajid', email: 'sajid@test.com', age: 20, gender: 'male' },
            std002: { name: 'Usman', email: 'usman@test.com', age: 18, gender: 'male' },
            std003: { name: 'Haider', email: 'haider@test.com', age: 16, gender: 'male' },
            std004: { name: 'Abeer', email: 'abeer@test.com', age: 17, gender: 'male' },
            std005: { name: 'Sameer', email: 'sameer@test.com', age: 20, gender: 'male' },
            std006: { name: 'Ibad', email: 'ibad@test.com', age: 22, gender: 'male' },
        },
    };

    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;