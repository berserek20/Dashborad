import { Box, Divider, ListItem, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PopupForm from './PopupForm';
import { Link } from 'react-router-dom';

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
        return <Stack direction="row">
            <ListItem sx={{ bgcolor: "#D3D3D3" }}><b>{key} </b></ListItem><ListItem sx={{ color: allowanceData[key] === "Yes" ? "green" : "red" }}>{allowanceData[key]}</ListItem>
            <Divider />

        </Stack>
    });
    const regData = Object.keys(registerData).map((key) => {
        return <Stack direction="row">
            <ListItem sx={{ bgcolor: "#D3D3D3" }}><b>{key}</b> </ListItem><ListItem sx={{ color: registerData[key] === "Yes" ? "green" : "red" }}>{registerData[key]}</ListItem>
        </Stack>
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
                            <Stack direction="row">

                                <Stack direction="column" sx={{ backgroundColor: "#D3D3D3" }}>
                                    <Typography variant='body1' ><b>Retention Rate Of New Graduate Hires</b></Typography>
                                    <Typography variant='body1' ><b>Work Style ( Overseas Bases )</b></Typography>
                                    <Typography variant='body1' ><b>Working Environments</b></Typography>
                                </Stack>

                                <Stack direction="column" >
                                    <Typography variant='body1' >Over 50%</Typography>
                                    <Typography variant='body1' color="green">Yes </Typography>
                                    <Typography variant='body1' >Not Working</Typography>
                                </Stack>
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
                            <Stack direction="row">

                                <Stack direction="column" sx={{ backgroundColor: "#D3D3D3" }}>
                                    <Typography variant='body1' ><b>Summer Holidays</b></Typography>
                                    <Typography variant='body1' ><b>Golden Weeks</b></Typography>
                                    <Typography variant='body1' ><b>Other Holidays</b></Typography>
                                </Stack>

                                <Stack direction="column" >
                                    <Typography variant='body1' color="green">Yes</Typography>
                                    <Typography variant='body1' color="green">Yes</Typography>
                                    <Typography variant='body1' color="green">Yes</Typography>
                                </Stack>
                            </Stack>


                        </Stack>

                    </Stack>

                </Stack>

            </Box >
        </>

    )
}

export default Body