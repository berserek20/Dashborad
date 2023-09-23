import React, { useRef, useState } from 'react'
import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import Sidenav from './Sidenav'
import schema from './Validate'
function Register() {
  const formRef = useRef({})
  const [error, setError] = useState([])
  function setInput(e, index) {
    if (index != null) {
      formRef.current[index] = e.target.value;

    }
    else {

      formRef.current[e.target.id] = e.target.value;
    }

    // console.log('formRef',formRef.current)

  }
  function saveDataToLocal() {
    console.log('formRef', formRef.current)
    schema.validate(formRef.current, { abortEarly: false }).then((res) => {

      console.log(res)
      const formDataString = JSON.stringify(formRef.current);
      localStorage.setItem('formData', formDataString);
    }).catch(err => setError(err.inner.map((e) => {
      return { "id": e.path, "message": e.message }
    })))

  }

  const errorFunc = (id) => {
    const el = error.find((val) => val.id === id)
    return (el) ? <p style={{ color: "red" }}>{el.message}</p> : undefined
  }



  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <Box component="form" margin="2em" width="100%">

        <Stack spacing={2} justifyContent="center">
          <Stack direction="row" spacing={2}>
            <div flex1 style={{ width: "50%" }}>
              <label><span style={{ color: "red" }}>*</span>Business Description</label>
              <TextField required id='Business Description' variant='outlined' helperText={errorFunc("Business Description")} multiline rows={4} fullWidth onChange={(e) => setInput(e)} />

            </div>
            <div flex1 style={{ width: "50%" }}>
              <label>Corporate Philosophy</label>
              <TextField id='Corporate Philosophy' variant='outlined' multiline rows={4} fullWidth onChange={(e) => setInput(e)} />
            </div>
          </Stack>

          <Stack spacing={3} direction="column">
            <Stack direction="row" spacing={3}>
              <div flex1>
                <label><span style={{ color: "red" }}>*</span>company name</label>
                <TextField required id='company name' helperText={errorFunc("company name")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>

              <div flex1>
                <label>Industry </label>
                <TextField id='Industry' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1>
                <label><span style={{ color: "red" }}>*</span>Mail ID</label>
                <TextField required id='Mail ID' helperText={errorFunc("Mail ID")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>

            <Stack direction="row" spacing={3}>
              <div flex1>
                <label><span style={{ color: "red" }}>*</span>Phone Number</label>
                <TextField required id='Phone Number' helperText={errorFunc("Phone Numbe")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1>
                <label><span style={{ color: "red" }}>*</span>Location</label>
                <TextField required id='Location' helperText={errorFunc("Location")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1>
                <label>website</label>
                <TextField id='Website' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>

            <Stack direction="row" spacing={3}>
            <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Working Hours</label>
              <TextField required id='Working Hours' label="Working Hours" helperText={errorFunc("Working Hours")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Establishment Date</label>
                <TextField type="date" required id='Establishment Date' helperText={errorFunc("Establishment Date")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />

              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Establishment Date</label>
                <TextField required id='Initial Capital' helperText={errorFunc("Initial Capital")} label="Initial Capital" variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>


            <Stack direction="row" spacing={3}>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Representative</label>
                <TextField required id='Representative' helperText={errorFunc("Representative")}  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Branch</label>
                <TextField required id='Branch' helperText={errorFunc("Branch")}  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Number Of Employees</label>

                <TextField type="number" required id='Number Of Employees' helperText={errorFunc("Number Of Employees")}  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>

            <Stack direction="row" spacing={3}>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Sales Revenue</label>
                <TextField type="number" required id='Sales Revenue' helperText={errorFunc("Sales Revenue")}  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Operation Profit</label>
                <TextField required id='Operation Profit' helperText={errorFunc("Operation Profit")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Average Age Of Employees</label>
                <TextField required id='Average Age Of Employees' helperText={errorFunc("Average Age Of Employees")} variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>

            <Stack direction="row" spacing={3}>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Stock</label>
                <TextField type="number" id='Stock' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>LinkedIn Link</label>
                <TextField id='LinkedIn_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Twitter Link</label>
                <TextField id='Twitter_Link' variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>

            <Stack direction="row" spacing={3}>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Facebook Link</label>
                <TextField id='Facebook_Link'  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Instagram Link</label>
                <TextField id='Instagram_Link'  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
             </div>
              <div flex1 >
                <label><span style={{ color: "red" }}>*</span>Youtube Link</label>
                <TextField id='Youtube_Link'  variant='outlined' onChange={(e) => setInput(e)} fullWidth />
              </div>
            </Stack>



            <FormLabel  >Foriegn Owned</FormLabel>
            <RadioGroup id='Foriegn Owned' row aria-required onChange={(e) => setInput(e, "Foreign Owned")}>
              <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
              <FormControlLabel value="No" label="No" control={<Radio />} />

            </RadioGroup>

          </Stack>

          <Button variant="contained" sx={{ bgcolor: "#000080", margin: "auto", width: "25%" }} onClick={() => saveDataToLocal()}>Save</Button>
        </Stack>

      </Box>

    </div>
  )
}
export default Register