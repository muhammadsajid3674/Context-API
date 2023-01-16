import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import generateKey from '../core/generateKey';
import { newStdEntry } from '../redux/actions/newStdAction'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { pushData } from '../firebase/firebaseMethods';

const AddStd = () => {

  const dispatch = useDispatch();
  const [modal, setModal] = useState({});

  const handleSubmit = (event) => {
    // let id = generateKey(6)
    // modal.id = id;
    // dispatch(newStdEntry(modal))
    event.preventDefault()
    return pushData(modal, 'Students')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <>
      <Box component='form' sx={{ margin: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField fullWidth type='text' variant='standard' label='Name' onChange={(e) => setModal({ ...modal, 'name': e.target.value })} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth type='email' variant='standard' label='Email' onChange={(e) => setModal({ ...modal, 'email': e.target.value })} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth type='text' variant='standard' label='Contact' onChange={(e) => setModal({ ...modal, 'contact': e.target.value })} />
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                  <Select
                    defaultValue=""
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Gender"
                    onChange={(e) => setModal({ ...modal, 'gender': e.target.value })}
                  >
                    <MenuItem value="null">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' onClick={handleSubmit}>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AddStd