import React, { useState } from 'react'
import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import Sidenav from './Sidenav'
// import { Label } from '@mui/icons-material'

function Register() {

  const [formValues, setFormValues] = useState({})
  function setInput(e, index) {
    console.log(e.target.value, e.target)
    setFormValues((prev) => ({
      ...prev, [e.target.id]: e.target.value
    }))
  }
  function saveDataToLocal() {
    const formDataString = JSON.stringify(formValues);

    localStorage.setItem('formData', formDataString);
  }
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <Box component="form" margin="2em" width="100%">

        <Stack spacing={2} justifyContent="center">
          <Stack direction="row" spacing={2}>
            {/* <InputLabel htmlFor="company_name">Company</InputLabel> */}
            {/* <OutlinedInput variant="outlined" multiline rows={4} TextField fullWidth name='company_name'></ OutlinedInput> */}

            <TextField required id='Business Description ' label="Business Description " variant='outlined' multiline rows={4} fullWidth />
            <TextField id='Corporate Philosophy' label="Corporate Philosophy" variant='outlined' multiline rows={4} fullWidth />

          </Stack>
          <Stack spacing={3} direction="column">
            <Stack direction="row" spacing={3}>

              <TextField required id='company_name' label="company name" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Industry' label="Industry" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Mail_ID ' label="Mail ID" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>

              <TextField required id='Phone_Number' label="Phone Number" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Location' label="Location" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Website' label="website" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>

              <TextField required id='Working_Hours' label="Working Hours" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Establishment_Date' label="Establishment Date" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Initial Capital' label="Initial Capital" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>


            <Stack direction="row" spacing={3}>
              <TextField required id='Representative ' label='Representative ' variant='outlined' onChange={(e) => setInput(e)} fullWidth />

              <TextField required id='Branch' label="Branch" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField type="number" required id='Number_Of_Employees' label='Number Of Employees' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>
              <TextField type="number" required id='Sales_Revenue' label='Sales Revenue' variant='outlined' onChange={(e) => setInput(e)} fullWidth />

              <TextField required id='Operation_Profit' label='Operation Profit' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField required id='Avrage_Age_Of_Employees' label='Avrage Age Of Employees' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>
              <TextField type="number" id='Stock' label="Stock" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='LinkedIn_Link' label='LinkedIn_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Twitter_Link' label='Twitter_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <Stack direction="row" spacing={3}>
              <TextField id='Facebook_Link' label='Facebook_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Instagram_Link' label='Instagram_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              <TextField id='Youtube_Link' label='Youtube_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
            </Stack>

            <FormLabel id="demo-radio-buttons-group-label">Foriegn Owned</FormLabel>
            <RadioGroup row aria-required >
              <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
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