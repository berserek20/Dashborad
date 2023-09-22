import { Dashboard } from '@mui/icons-material'
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function Sidenav() {
  return (
    <div>
        <Box sx={{width:"100%",maxWidth:360,bgcolor:'primary.dark',color:'white'}} >
            <nav    aria-label='main mailbox folders'>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard></Dashboard>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </List>

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard style={{color:'white'}}></Dashboard>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </List>

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard></Dashboard>
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                    </ListItemButton>
                </List>

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard style={{color:'white'}}></Dashboard>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </List>

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Dashboard></Dashboard>
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                    </ListItemButton>
                </List>

                
            </nav></Box>
    </div>
  )
}

export default Sidenav