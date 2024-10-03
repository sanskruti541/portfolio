import React from 'react'

const Nevbar = () => {
  return (
    <div style={{display:"flex", 
    justifyContent:"space-around",
    background: "black",
    height: "80px",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: "20px",
    fontSize: "40px",
    }}>
        

         <div style={{color:"white",margin:"5px"}}>Portfolio</div>
         <div style={{display:"flex", justifyContent:"space-evenly",
            height:"20px",
            width:"600px",
            color:"white",
            borderRadius: "10px",
            background: "black",
            }}>
            <a>Home</a>
            <a>About</a>
            <a>contact</a>
            <a>Skills</a>
         </div>
    </div>
  )
}

export default Nevbar