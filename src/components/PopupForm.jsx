import { Button, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import DialogMcq from './DialogMcq';

function PopupForm({ open, handleClose }) {
    const dref = useRef([]);
    dref.current =[];
    function setVal(e) {
        console.log(e.target.value,e);
        console.log(dref.current)

    }
    function addTORef(el){
        console.log(el)
        dref.current.push(el)
    }
    useEffect(()=>{
        console.log(dref)

    },[])
    return (
        <div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Allowances</DialogTitle>
                <DialogContent>
                    <FormLabel></FormLabel>
                    <FormControl >
                        <Grid container spacing={1} columns={30} >

                            {/* Grid 1 */}
                            <DialogMcq ref={addTORef} id="Salary System Based On Meritocracy" content="Salary System Based On Meritocracy" setVal={setVal}/>



                            {/* Grid 2 */}
                            <DialogMcq ref={dref[1]} content="120 Or More Annual Holidays" setVal={setVal}/>

                            {/* Grid 3 */}
                            <DialogMcq ref={dref[2]} content="Generous Welfare Benifits"  setVal={setVal}/>


                            {/* Grid 4 */}
                            <DialogMcq content="Enhanced Education And Training" setVal={setVal}/>



                            {/* Grid 5 */}
                            <DialogMcq content="Support System For Acquriring Qualification" setVal={setVal}/>



                            {/* Grid 6 */}
                            <DialogMcq content="Reduced Working Hours System" setVal={setVal}/>



                            {/* Grid 7 */}
                            <DialogMcq content="Maternity Care Leave System" setVal={setVal}/>



                            {/* Grid 8 */}
                            <DialogMcq content="Company Housing / Rent Subsidy" setVal={setVal}/>



                            {/* Grid 9 */}
                            <DialogMcq content="Family Allowance" setVal={setVal}/>



                            {/* Grid 10 */}
                            <DialogMcq content="Employee Stock Ownership" setVal={setVal}/>



                            {/* Grid 11 */}
                            <DialogMcq content="Side Job Available" setVal={setVal}/>




                            {/* Grid 12 */}
                            {/* <DialogMcq content="120 Or More Annual Holidays"/> */}

                            <Grid xs={2}>

                                <Typography sx={{ color: "red" }}></Typography>
                            </Grid>
                            <Grid xs={16}>

                                <Typography>Mentor System</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <RadioGroup row onChange={(e)=>setVal(e)}>
                                    <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
                                    <FormControlLabel value="No" label="No" control={<Radio />} />

                                </RadioGroup>
                            </Grid>

                            {/* Grid 13 */}
                            {/* <DialogMcq content="120 Or More Annual Holidays"/> */}

                            <Grid xs={2}>

                                <Typography sx={{ color: "red" }}></Typography>
                            </Grid>
                            <Grid xs={16}>

                                <Typography>Career Consulting</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <RadioGroup row onChange={(e)=>setVal(e)}>
                                    <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
                                    <FormControlLabel value="No" label="No" control={<Radio />} />

                                </RadioGroup>
                            </Grid>

                        </Grid>
                    </FormControl>
                    <Button variant="contained" sx={{bgcolor:"#000080",margin:"auto"}}>Save</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PopupForm