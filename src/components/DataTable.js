import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStdEntry } from '../redux/actions/deleteStdAction'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { updateStdEntry } from '../redux/actions/updateStdAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function DataTable() {

    const [editData, setEditData] = useState({})
    const [oldData, setOldData] = useState({})


    // Modal Toggle
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (event) => {
        setOpen(true);
        setOldData(event);
        setEditData(event);
    };

    const allStd = useSelector(state => state.allStd)
    const dispatch = useDispatch()

    const handleDelete = (obj) => {
        dispatch(deleteStdEntry(obj))
    }
    const handleEdit = () => { 
        dispatch(updateStdEntry(editData, oldData))
        setOpen(false)
    }

    return (
        <>
            <table border='1' cellSpacing='0' cellPadding='10' style={{ margin: 20 }}>
                <thead>
                    <tr style={{ backgroundColor: '#000', color: '#fff' }}>
                        <td className='text-center'>S No.</td>
                        <td className='text-center'>Name</td>
                        <td className='text-center'>Email</td>
                        <td className='text-center'>Contact</td>
                        <td className='text-center'>Gender</td>
                        <td className='text-center'>Actions</td>
                    </tr>
                </thead>
                {allStd && Array.isArray(allStd) && allStd.length > 0 ? (
                    <tbody>
                        {Object.keys(allStd).map((userId, index) => {
                            return <tr key={userId}>
                                <td>{parseInt(userId) + 1}</td>
                                <td>{allStd[userId].name}</td>
                                <td>{allStd[userId].email}</td>
                                <td>{allStd[userId].contact}</td>
                                <td>{allStd[userId].gender}</td>
                                <td>
                                    <button onClick={() => handleOpen(allStd[userId])}>Edit</button>
                                    <button onClick={() => handleDelete(allStd[userId])}>Delete</button>
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
                            <td>
                                <button disabled>Edit</button>
                                <button disabled>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>

            {/* Edit Data Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box component='form'>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField defaultValue={editData.name} type='text' variant='standard' label='Name' onChange={(e) => setEditData({...editData, 'name': e.target.value})} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField defaultValue={editData.email} type='email' variant='standard' label='Email' onChange={(e) => setEditData({...editData, 'email': e.target.value})} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField defaultValue={editData.contact} type='text' variant='standard' label='Contact' onChange={(e) => setEditData({...editData, 'contact': e.target.value})} />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                                    <Select
                                        defaultValue={editData.gender}
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        label="Gender" onChange={(e) => setEditData({...editData, 'gender': e.target.value})}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value='male'>Male</MenuItem>
                                        <MenuItem value='female'>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant='contained' onClick={handleEdit}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

// function MuiModal(props) {
//     return (
//         <>
//             <Modal
//                 open={props.open}
//                 onClose={props.onClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Box component='form'>
//                         <Grid container spacing={3}>
//                             <Grid item xs={6}>
//                                 <TextField defaultValue={ } type='text' variant='standard' label='Name' />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField defaultValue={ } type='email' variant='standard' label='Email' />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField defaultValue={ } type='text' variant='standard' label='Contact' />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <FormControl variant="standard" fullWidth>
//                                     <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
//                                     <Select
//                                         defaultValue=""
//                                         labelId="demo-simple-select-standard-label"
//                                         id="demo-simple-select-standard"
//                                         label="Gender"
//                                     >
//                                         <MenuItem value="">
//                                             <em>None</em>
//                                         </MenuItem>
//                                         <MenuItem value='m'>Male</MenuItem>
//                                         <MenuItem value='fm'>Female</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Button variant='contained'>Submit</Button>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//             </Modal>
//         </>
//     )
// }

export default DataTable;