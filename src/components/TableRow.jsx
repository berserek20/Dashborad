import React from 'react'
function TableRow({label,value,parentStyle,styleLabel,styleValue}) {
    return (
        <div style={{display:"flex",flexDirection:"row",borderBottom: "2px solid rgba(0, 0, 0, 0.12)",...parentStyle}}>
            <div style={{ flex: 1, backgroundColor: "rgb(247, 247, 247)", fontWeight: "500", padding: "10px 30px" ,...styleLabel}}>{label}</div>
            <div style={{ flex: 1, color: "green", padding: "10px 30px",...styleValue }}>{value}</div>
        </div>
    )
}

export default TableRow