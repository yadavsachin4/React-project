import React, { useState } from 'react'


function FirstComponent() {


    const [stringvalue, setStringValue]=useState("Sachin")
    // console.log(stringvalue)

    const handleaddString=()=>{
        setStringValue(stringvalue)
        console.log(stringvalue)
    }

    const handleString=()=>{
        setStringValue("Hello Sachin")
        console.log(stringvalue)
    }
  return (
    <div>
      <button onClick={()=>{handleaddString()} } >Add</button>
      <button onClick={()=>{handleString()} } >Update The string</button>
      
    </div>
  )
}

export default FirstComponent
