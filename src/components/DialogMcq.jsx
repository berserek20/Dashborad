import React from 'react'
import {  FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'

function DialogMcq({ content,setVal,id }) {
   
    return (
        <>
            <Grid xs={2}>

                <Typography sx={{ color: "red" }}>*</Typography>
            </Grid>
            <Grid xs={16}>

                <Typography>{content}</Typography>
            </Grid>
            <Grid xs={12} onChange={(e)=>setVal(e.target.value,id)}>
                <RadioGroup itemRef={content}  row required >
                    <FormControlLabel  value="Yes" label="Yes" control={<Radio />} />
                    <FormControlLabel value="No" label="No" control={<Radio />} />

                </RadioGroup>
            </Grid>
        </>

    )
}

export default DialogMcq