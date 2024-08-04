import React, { useEffect, useState } from 'react'

 export const StateEx = () => {
    const[count,setCount]=useState(0)
    const[dev,setDev]=useState("Ravi")

    useEffect(()=>{
      document.title =`${dev} clicked ${count} times `

  })

  return (
    <div className='container p-5'>
      <h1>Name:{dev}</h1>
      <button onClick={()=>setDev("Kishore")}>Update</button>
        <h1>Counter {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>

        <button onClick={()=>setCount(count-1)}>Sub</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        
        
    </div>
  )
}


