import React, { Fragment } from 'react'
import MyContext from '../Context/MyContext'

const DataTable = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <Fragment>
                    <h4>User Data:</h4>
                    <table border='1' cellSpacing='0' cellPadding='10'>
                        <thead>
                            <tr >
                                {context.tableHead.stdHead.map(userId => {
                                    return <td key={userId}>{userId}</td>
                                })}
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(context.std).map(userId => {
                                return <tr key={userId}>
                                    <td>{context.std[userId].name}</td>
                                    <td>{context.std[userId].email}</td>
                                    <td>{context.std[userId].age}</td>
                                    <td>{context.std[userId].gender}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </Fragment>
            )}
        </MyContext.Consumer>
    )
}

export default DataTable;