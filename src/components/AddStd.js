import React, { useContext, useState } from 'react'
import MyContext from '../Context/MyContext'
import generateKey from '../core/generateKey'

const AddStd = () => {
    const { dispatchStdEvent } = useContext(MyContext)

    const [newEntry, setNewEntry] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
    })

    const handleSubmit = () => {
        let key = generateKey(6);
        newEntry.id = key;
        dispatchStdEvent('ADD_STD', { newStd: newEntry });
        setNewEntry({
            name: '',
            email: '',
            age: '',
            gender: '',
        })

    }
    return (
        <div className='d-flex justify-content-center'>
            <input
                value={newEntry.name}
                onChange={(event) => setNewEntry({
                    ...newEntry,
                    [event.target.name]: event.target.value
                })}
                name='name' />
            <input
                value={newEntry.email}
                onChange={(event) => setNewEntry({
                    ...newEntry,
                    [event.target.name]: event.target.value
                })}
                name='email' />
            <input
                value={newEntry.age}
                onChange={(event) => setNewEntry({
                    ...newEntry,
                    [event.target.name]: event.target.value
                })}
                name='age' />
            <input
                value={newEntry.gender}
                onChange={(event) => setNewEntry({
                    ...newEntry,
                    [event.target.name]: event.target.value
                })}
                name='gender' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddStd