"use client"
import { useState } from "react"

export default function(){
  let [state,setstate]=useState(0)
  const handlecounter=()=>{
    if(state<10){
      setstate(state+1)
    }
    else if(state==10){
      setstate(state-state)
    }
  }
  return(
    <div className="counter-contner">
      <p className="para">You have clickiced {state} times</p>
      <button className="btn" onClick={handlecounter }>Click</button>
    </div>
  )
}