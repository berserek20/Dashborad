import React from 'react'
import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'

function DialogMcq({ content,setVal }) {
   
    return (
        <>
            <Grid xs={2}>

                <Typography sx={{ color: "red" }}>*</Typography>
            </Grid>
            <Grid xs={16}>

                <Typography>{content}</Typography>
            </Grid>
            <Grid xs={12} onChange={(e)=>setVal(e)}>
                <RadioGroup  row aria-required >
                    <FormControlLabel  value="Yes" label="Yes" control={<Radio />} />
                    <FormControlLabel value="No" label="No" control={<Radio />} />

                </RadioGroup>
            </Grid>
        </>

    )
}

export default DialogMcq