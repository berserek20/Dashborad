import React, { useRef } from 'react'
import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import Sidenav from './Sidenav'
// import { Label } from '@mui/icons-material'

function Register() {

  const formRef =useRef({})
  function setInput(e, index) {
    if(index !=null){
      formRef.current[index]=e.target.value;

    }
    else{

      formRef.current[e.target.id]=e.target.value;
    }
    
    console.log(formRef.current)
   
  }
  function saveDataToLocal() {
    const formDataString = JSON.stringify(formRef.current);

    localStorage.setItem('formData', formDataString);
    
  }
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <Box component="form" margin="2em" width="100%">

        <Stack spacing={2} justifyContent="center">
          <Stack direction="row" spacing={2}>
          

            <TextField required id='Business Description ' label="Business Description " variant='outlined' multiline rows={4} fullWidth onChange={(e) => setInput(e)}/>
            <TextField id='Corporate Philosophy' label="Corporate Philosophy" variant='outlined' multiline rows={4} fullWidth onChange={(e) => setInput(e)}/>

          </Stack>
          <Stack spacing={3} direction="column">
            <Stack direction="row" spacing={3}>

              <TextField required id='company name' label="company name" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Industry' label="Industry" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Mail ID ' label="Mail ID" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>

              <TextField required id='Phone Number' label="Phone Number" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Location' label="Location" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Website' label="website" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>

              <TextField required id='Working Hours' label="Working Hours" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Establishment Date' label="Establishment Date" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Initial Capital' label="Initial Capital" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>


            <Stack direction="row" spacing={3}>
              <TextField required id='Representative ' label='Representative ' variant='outlined' onChange={(e) => setInput(e)} fullWidth />

              <TextField required id='Branch' label="Branch" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField type="number" required id='Number Of Employees' label='Number Of Employees' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>
              <TextField type="number" required id='Sales Revenue' label='Sales Revenue' variant='outlined' onChange={(e) => setInput(e)} fullWidth />

              <TextField required id='Operation Profit' label='Operation Profit' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Avrage Age Of Employees' label='Avrage Age Of Employees' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>
              <TextField type="number" id='Stock' label="Stock" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='LinkedIn_Link' label='LinkedIn Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Twitter_Link' label='Twitter Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>
              <TextField id='Facebook_Link' label='Facebook Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Instagram_Link' label='Instagram Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Youtube_Link' label='Youtube Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <FormLabel  >Foriegn Owned</FormLabel>
            <RadioGroup id='Foriegn Owned' row aria-required onChange={(e) => setInput(e,"Foreign Owner")}>
              <FormControlLabel  value="Yes" label="Yes" control={<Radio />} />
              <FormControlLabel value="No" label="No" control={<Radio />} />

            </RadioGroup>

          </Stack>

          <Button variant="contained" sx={{ bgcolor: "#000080", margin: "auto", width: "25%" }} onClick={saveDataToLocal}>Save</Button>
        </Stack>

      </Box>

    </div>
  )
}
export default Register