import { Button, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, {  useRef } from 'react'
import DialogMcq from './DialogMcq';

function PopupForm({ open, handleClose }) {
    const dref = useRef({});
    function setVal(value, id) {
        // dref.current(current[id]:value)
        dref.current[id] = value;
        // console.log(dref.current,value)

    }
   
    
    function saveToLocal() {
        const formDataString = JSON.stringify(dref.current);

        localStorage.setItem('Allowance', formDataString)
        handleClose();
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Allowances</DialogTitle>
                <DialogContent>
                    <FormLabel></FormLabel>
                    <FormControl >
                        <Grid container spacing={1} columns={30} >

                            {/* Grid 1 */}
                            <DialogMcq id="Salary System Based On Meritocracy" content="Salary System Based On Meritocracy" setVal={setVal} />



                            {/* Grid 2 */}
                            <DialogMcq id="120 Or More Annual Holidays" content="120 Or More Annual Holidays" setVal={setVal} />

                            {/* Grid 3 */}
                            <DialogMcq id="Generous Welfare Benifits" content="Generous Welfare Benifits" setVal={setVal} />


                            {/* Grid 4 */}
                            <DialogMcq id="Enhanced Education And Training" content="Enhanced Education And Training" setVal={setVal} />



                            {/* Grid 5 */}
                            <DialogMcq id="Support System For Acquriring Qualification" content="Support System For Acquriring Qualification" setVal={setVal} />



                            {/* Grid 6 */}
                            <DialogMcq id="Reduced Working Hours System" content="Reduced Working Hours System" setVal={setVal} />



                            {/* Grid 7 */}
                            <DialogMcq id="Maternity Care Leave System" content="Maternity Care Leave System" setVal={setVal} />



                            {/* Grid 8 */}
                            <DialogMcq id="Company Housing / Rent Subsidy" content="Company Housing / Rent Subsidy" setVal={setVal} />



                            {/* Grid 9 */}
                            <DialogMcq id="Family Allowance" content="Family Allowance" setVal={setVal} />



                            {/* Grid 10 */}
                            <DialogMcq id="Employee Stock Ownership" content="Employee Stock Ownership" setVal={setVal} />



                            {/* Grid 11 */}
                            <DialogMcq id="Side Job Available" content="Side Job Available" setVal={setVal} />




                            {/* Grid 12 */}
                            {/* <DialogMcq content="120 Or More Annual Holidays"/> */}

                            <Grid xs={2}>

                                <Typography sx={{ color: "red" }}></Typography>
                            </Grid>
                            <Grid xs={16}>

                                <Typography>Mentor System</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <RadioGroup id='Mentor System' row onChange={(e) => setVal(e.target.value,"Mentor System")}>
                                    <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
                                    <FormControlLabel value="No" label="No" control={<Radio />} />

                                </RadioGroup>
                            </Grid>

                          

                            <Grid xs={2}>

                                <Typography sx={{ color: "red" }}></Typography>
                            </Grid>
                            <Grid xs={16}>

                                <Typography>Career Consulting</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <RadioGroup id='Career Consulting' row onChange={(e) => setVal(e.target.value,"Career Consulting")}>
                                    <FormControlLabel value="Yes" label="Yes" control={<Radio />} />
                                    <FormControlLabel value="No" label="No" control={<Radio />} />

                                </RadioGroup>
                            </Grid>

                        </Grid>
                    <Button variant="contained" sx={{ bgcolor: "#000080", margin: "auto" }} onClick={saveToLocal}>Save</Button>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PopupForm