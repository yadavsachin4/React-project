import React, { useContext } from 'react'
import { GlobaslContext } from './ContextPovider'

function ChildOne() {

    const{isVisiable,setisVisible}=useContext(GlobaslContext);

    const hancleCheckboolean=()=>{
        setisVisible(!isVisiable)
        console.log(isVisiable)
    }


  return (
    <div>
      <button type='button' onClick={()=>hancleCheckboolean()}>Child One</button>

    </div>
  )
}

export default ChildOne
