import React, { useState } from 'react'

const ReactHooks = () => {
    const[count, setCount]=useState(0)

    console.log("Checking Render");
    



  return (
    <div>
      <div> ReactHooks</div>
      <div>{count}</div>
    </div>
  )
}

export default ReactHooks
