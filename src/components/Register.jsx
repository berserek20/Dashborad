import React from 'react'
import { Box, FormControlLabel, Input, InputLabel, ListItem, OutlinedInput, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import Sidenav from './Sidenav'
// import { Label } from '@mui/icons-material'

function Register() {
  function setInput(e, index) {
    console.log(e.target.value, e.target.id)
  }
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <Box component="form" margin="2em" width="100%">
        {/* <Stack spacing={{ xs: 1, sm: 2 }}  useFlexGap flexWrap="wrap" > */}
<Stack spacing={2} >
          <Stack direction="row">
            {/* <InputLabel htmlFor="company_name">Company</InputLabel> */}
            {/* <OutlinedInput variant="outlined" multiline rows={4} TextField fullWidth name='company_name'></ OutlinedInput> */}

            <TextField required id='company_name' variant='outlined' multiline rows={4} fullWidth />
            <TextField id='company_name' variant='outlined' multiline rows={4} fullWidth />

          </Stack>
<Stack s={3} direction="row">

          <TextField required id='company_name' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='Industry' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Mail_ID ' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Phone_Number' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Location' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='Website' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Working_Hours' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Establishment_Date' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Representative' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Branch' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField type="number" required id='Number_Of_Employees' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField type="number" required id='Sales_Revenue' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Operation_Profit' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='Avrage_Age_Of_Employees' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField type="number" id='Stock' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='LinkedIn_Link' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='Twitter_Link' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='Facebook_Link' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='Instagram_Link' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField id='Youtube_Link' variant='outlined' onChange={(e) => setInput(e)} />
          <TextField required id='company_name' variant='outlined' onChange={(e) => setInput(e)} />

          <RadioGroup row aria-required >
            <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
            <FormControlLabel value="No" label="No" control={<Radio />} />

          </RadioGroup>
</Stack>
        </Stack>

      </Box>

    </div>
  )
}
export default Register