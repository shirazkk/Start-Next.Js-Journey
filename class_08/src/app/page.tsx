'use client'

import { useState } from "react";

export default function Homepage(){
   const [count ,setcount]= useState(0)
   
  //  function increment(){
  //    setcount(count+1)
    //  setcount(count+1)
    //  setcount(count+1)
  // }
  
   function increment(){
    setcount(count+1)
  }

  function decrement(){
    setcount(count-1)
  }

   return(
    <>
    <button className="bg-black text-white py-2 px-20 m-36" onClick={increment}>increment</button>
    <button className="bg-black text-white py-2 px-20 m-36" onClick={decrement}>decrement</button>
    <h2 className={count>10 ? 'bg-red-300 text-blue-400':'bg-gray-600'}>{count}</h2>
    </>
   ) 

}


// dom and virtual dom.
