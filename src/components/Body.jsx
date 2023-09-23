import { Box, ListItem, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PopupForm from './PopupForm';
import { Link } from 'react-router-dom';
import TableRow from './TableRow'

function Body() {
    const [allowanceData, setAllowanceData] = useState({});
    const [registerData, setRegisterData] = useState({});

    const [open, setOpen] = useState(false);
    function handleClickOpen() {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const v = localStorage.getItem("Allowance")
        const temp1 = JSON.parse(v);
        const r = localStorage.getItem("formData")
        const temp2 = JSON.parse(r);
        if (temp1 != null) {

            setAllowanceData(temp1);
        }
        if (temp2 != null) {
            setRegisterData(temp2)
        }
    }, [open])
    const data = Object.keys(allowanceData).map((key) => {
        return <TableRow label={key} value={allowanceData[key]} styleValue={{ color: allowanceData[key] === "Yes" ? "green" : "red" }}/>
    });


    const regData = Object.keys(registerData).map((key) => {
        return <TableRow label={key} value={registerData[key]} styleValue={{ color: registerData[key] === "Yes" ? "green" : "red" }}/>
    });

    return (
        <>
            <Box sx={{ width: '100%', margin: "2em" }}>

               
                <Stack direction="column">

                    <Stack direction="row" spacing={5} sx={{ bgcolor: "lightblue" }}>
                        <ListItem >
                            <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                            <Typography variant='body2' sx={{ color: "purple" }}>Corporate Information</Typography>
                        </ListItem>

                        <Stack justifyContent="flex-end">
                            <ListItem >
                                <Link to='/register' variant='body2'>
                                    <DriveFileRenameOutlineIcon sx={{ color: "purple" }} />
                                </Link>
                            </ ListItem >
                        </Stack>
                    </Stack>
                    <Stack>
                        {regData}
                    </Stack>
                </Stack>



                <Stack direction="row" spacing={3} marginTop="2em">
                    <Stack direction="column" width="70%">

                        <Stack direction="row" sx={{ bgcolor: "lightblue" }}>

                            <ListItem sx={{ bgcolor: "lightblue" }}>

                                <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                <Typography variant='body1' sx={{ color: "purple" }}>Allowances</Typography>
                            </ListItem>
                            <Stack direction="flex-end">

                                <ListItem>

                                    <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor: "pointer" }} onClick={handleClickOpen} />
                                    <PopupForm open={open} handleClose={handleClose} />
                                </ListItem>
                            </Stack>
                        </Stack>
                        {/* </Stack> */}
                        {data}
                        {/* {data===null?(""):(data)} */}
                    </Stack>


                    <Stack width="50%" spacing={3}>

                        <Stack >
                            <Stack direction="row" sx={{ bgcolor: "lightblue" }}>

                                <ListItem >
                                    <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                    <Typography variant='body2' sx={{ color: "purple" }}>Others</Typography>
                                </ListItem>
                                <Stack justifyContent="flex-end">
                                    <ListItem>

                                        <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor: "pointer" }} />
                                    </ListItem>

                                </Stack>
                            </Stack>
                            <Stack direction="column">
                                <TableRow label={"Retention Rate Of New Graduate Hires"} value={"Over 50%"} />
                                <TableRow label={"Work Style ( Overseas Bases )"} value={"Yes"} />
                                <TableRow label={"Working Environments"} value={"Not Working"} />
                            </Stack>



                        </Stack>


                        <Stack >
                            <Stack direction="row" sx={{ bgcolor: "lightblue" }}>

                                <ListItem >

                                    <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                    <Typography variant='body2'>Holidays</Typography>
                                    
                                </ListItem>
                                <Stack justifyContent="flex-end">
                                        <ListItem>
                                    <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor: "pointer" }} />

                                    </ListItem>
                                </Stack>
                            </Stack>
                            <Stack direction="column">
                                <TableRow label={"Simple"} value={"Yes"} />
                            </Stack>


                        </Stack>

                    </Stack>

                </Stack>

            </Box >
        </>

    )
}

export default Body