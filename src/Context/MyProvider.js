import React, { useState } from 'react'
import AddStd from '../components/AddStd'
import DataTable from '../components/DataTable'
import MyContext from './MyContext'

const MyProvider = () => {
    const [std, setStd] = useState([])

    const tableHead = ['Name', 'Email', 'Age', 'Gender']

    const dispatchStdEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_STD':
                setStd([...std, payload.newStd]);
                return;
            case 'DELETE_STD':
                let afterDelte = std.filter((elem, index) => index !== payload.stdIndex);
                setStd(afterDelte);
                return;
            case 'UPDATE_STD':
                return;
            default:
                return;
        }
    }

    return (
        <MyContext.Provider value={{ tableHead, std, dispatchStdEvent }}>
            <AddStd />
            <DataTable />
        </MyContext.Provider>
    )
}

export default MyProvider