import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'

const DataTable = () => {

    const { dispatchStdEvent } = useContext(MyContext)

    const handleDelete = (event) => {
        dispatchStdEvent('DELETE_STD', { stdIndex: event })
    }

    return (
        <MyContext.Consumer>
            {context => (
                <div className='tableMain'>
                    <h4>User Data:</h4>
                    <table border='1' cellSpacing='0' cellPadding='10'>
                        <thead>
                            <tr >
                                {context.tableHead.map(userId => {
                                    return <td className='text-center' key={userId}>{userId}</td>
                                })}
                                <td className='text-center'>Actions</td>
                            </tr>
                        </thead>
                        {context.std && Array.isArray(context.std) && context.std.length > 0 ? (
                            <tbody>
                                {Object.keys(context.std).map((userId, index) => {
                                    return <tr key={userId}>
                                        <td>{context.std[userId].name}</td>
                                        <td>{context.std[userId].email}</td>
                                        <td>{context.std[userId].age}</td>
                                        <td>{context.std[userId].gender}</td>
                                        <td>
                                            <button>Edit</button>
                                            <button onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td>No Data found</td>
                                    <td>No Data found</td>
                                    <td>No Data found</td>
                                    <td>No Data found</td>
                                    <td>No Data found</td>
                                </tr>
                            </tbody>
                        )}
                    </table>

                </div>
            )}
        </MyContext.Consumer>
    )
}

export default DataTable;