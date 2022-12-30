import React from 'react'
import MyContext from '../Context/MyContext'

const DataTable = () => {
    return (
        <MyContext.Consumer>
            {context => (
                <div className='tableMain'>
                    <h4>User Data:</h4>
                    {context.std && Array.isArray(context.std) && context.std.length > 0 ? (
                    <table border='1' cellSpacing='0' cellPadding='10'>
                        <thead>
                            <tr >
                                {context.tableHead.map(userId => {
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

                    ) : (
                        <h1>No Data Found</h1>
                    )}
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default DataTable;