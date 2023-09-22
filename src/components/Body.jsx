import { Box, ListItem, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PopupForm from './PopupForm';
import { Link } from 'react-router-dom';

function Body() {
    const [allowanceData, setAllowanceData] = useState([]);
    const [open, setOpen] = useState(false);
    function handleClickOpen() {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const v = localStorage.getItem("Allowance")
        const temp = JSON.parse(v);

        if(temp != null){

            setAllowanceData(temp);
        }
        
        console.log(allowanceData)
    }, [])
    const data = Object.keys(allowanceData).map((key) => {
        return <Stack direction="row">
            <ListItem sx={{bgcolor:"#D3D3D3"}}>{key} </ListItem><ListItem>{allowanceData[key]}</ListItem>
        </Stack>
    });
    
    return (
        <>
            <Box sx={{ width: '100%', margin: "2em" }}>

                {/* <Stack spacing={2}> */}
                {/* direction="row" */}
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

                {/* <Box sx={{ width: '100%', marginTop: "2em" }}> */}


                <Stack direction="row" spacing={3} marginTop="2em">
                    <Stack direction="column">

                        <Stack width="100%">
                            <ListItem sx={{ bgcolor: "lightblue" }}>

                                <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                <Typography variant='body1' sx={{ color: "purple" }}>Allowances</Typography>
                                <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor: "pointer" }} onClick={handleClickOpen} />
                                <PopupForm open={open} handleClose={handleClose} />
                            </ListItem>

                        </Stack>
                        {data}
                        {/* {data===null?(""):(data)} */}
                    </Stack>


                    <Stack width="50%">

                        <Stack >
                            <ListItem sx={{ bgcolor: "lightblue" }}>
                                <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                <Typography variant='body2' sx={{ color: "purple" }}>Others</Typography>
                                <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor: "pointer" }} />
                            </ListItem>

                            <ListItem>
                                <Typography variant='body1' >Retention Rate Of New Graduate Hires</Typography>
                                <Typography variant='body1' >Over 50%</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography variant='body1' >Retention Rate Of New Graduate Hires</Typography>
                                <Typography variant='body1' >Over 50%</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography variant='body1' >Retention Rate Of New Graduate Hires</Typography>
                                <Typography variant='body1' >Over 50%</Typography>
                            </ListItem>

                        </Stack>


                        <Stack >
                            <ListItem sx={{ bgcolor: "lightblue" }}>

                                <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                <Typography variant='body2'>Holidays</Typography>
                                <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor: "pointer" }} />
                            </ListItem>

                            <ListItem>
                                <Typography variant='body1' >Retention Rate Of New Graduate Hires</Typography>
                                <Typography variant='body1' >Over 50%</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography variant='body1' >Retention Rate Of New Graduate Hires</Typography>
                                <Typography variant='body1' >Over 50%</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography variant='body1' >Retention Rate Of New Graduate Hires</Typography>
                                <Typography variant='body1' >Over 50%</Typography>
                            </ListItem>
                        </Stack>

                    </Stack>

                </Stack>
                {/* </Box> */}

            </Box >
        </>

    )
}

export default Body