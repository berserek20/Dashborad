import React from 'react'
import Sidenav from './Sidenav'
import Body from './Body'

function Dashboard() {
    return (
        <>
        <div    style={{display:"flex"}}>

            <Sidenav />
            <Body />
        </div>
        </>)
}

export default Dashboard