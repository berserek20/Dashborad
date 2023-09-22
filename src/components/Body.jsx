import { Box, Link, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PopupForm from './PopupForm';
// import { Link } from 'react-router-dom';

function Body() {
    const [open, setOpen] = useState(false);
    function handleClickOpen() {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
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
                            <Link href='/register' variant='body2'>
                                <DriveFileRenameOutlineIcon sx={{ color: "purple" }} />
                            </Link>
                        </ ListItem >
                    </Stack>

                </Stack>
                {/* <Box sx={{ width: '100%', marginTop: "2em" }}> */}


                <Stack direction="row" spacing={3} marginTop="2em">

                    <Stack width="50%">
                        <ListItem sx={{ bgcolor: "lightblue" }}>

                            <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                            <Typography variant='body1' sx={{ color: "purple" }}>Allowances</Typography>
                            <DriveFileRenameOutlineIcon sx={{ color: "purple" , cursor:"pointer"}} onClick={handleClickOpen} />
                            <PopupForm open={open} handleClose={handleClose} />
                        </ListItem>

                    </Stack>

                    <Stack width="50%">

                        <Stack >
                            <ListItem sx={{ bgcolor: "lightblue" }}>
                                <HorizontalRuleIcon sx={{ color: "blue", transform: "RotateZ(90deg)" }} />
                                <Typography variant='h6'>Others</Typography>
                                <DriveFileRenameOutlineIcon sx={{ color: "purple", cursor:"pointer"}} />
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
                            <Typography variant='h6'>Holidays</Typography>
                            <DriveFileRenameOutlineIcon sx={{ color: "purple" , cursor:"pointer"}} />
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