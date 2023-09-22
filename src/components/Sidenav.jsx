import { Dashboard } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { ReactComponent as Window } from '../assets/briefcase.svg'
import { ReactComponent as Case } from '../assets/case.svg'
import { ReactComponent as Exit } from '../assets/exit.svg'


function Sidenav() {
    return (
        <div>
            <Box sx={{ width: "100%", maxWidth: 360, bgcolor: 'primary.dark', color: 'white' }} >
                <nav aria-label='main mailbox folders'>
                    <List>
                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }} >

                                <Window style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                  
                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }}>

                                <Case style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>

                            <ListItemText primary="Manage Subscription" />
                        </ListItemButton>
                  
                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }}>

                                <Case style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Young Brain" />
                        </ListItemButton>
                   

                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }}>

                                <Case style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Mid Carrer" />
                        </ListItemButton>
                   
                   
                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }}>

                                <Case style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Vendor" />
                        </ListItemButton>
                    
                    
                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }}>

                                <Case style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Consultant" />
                        </ListItemButton>
                    
                    
                        <ListItemButton sx={{ marginRight: "0px" }}>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }} >

                                <Window style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Report" />
                        </ListItemButton>
                    
                    
                        <ListItemButton>
                            <ListItem sx={{ width: "50%", marginRight: "0px" }} >

                                <Exit style={{ height: "2em", width: "2em", color: 'white' }} />
                            </ListItem>
                            <ListItemText primary="Sign Out" />
                        </ListItemButton>
                    </List>
                </nav></Box>
        </div>
    )
}

export default Sidenav