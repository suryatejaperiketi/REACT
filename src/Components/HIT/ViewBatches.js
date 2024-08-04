import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBatches = () => {
    const [batchesData,setBatchesData] = useState([])
    const[id,setid]= useState("")
    const[course,setcourse]= useState("")
    const[date,setdate]= useState("")
    const[duration,setduration]= useState("")
    const[timings,settimings]= useState("")
    const[trainer,settrainer]= useState("")

  useEffect(()=>{
    axios.get("http://localhost:4000/batches")
    .then((res)=> setBatchesData(res.data))
    .catch((err)=> console.log(err))
  })
   const deleteBatch=(batchId)=>{
    axios.delete(`http://localhost:4000/batches/${batchId}`)
    .then(()=>alert("Deleted Successfully"))
    .catch((err)=>console.log(err))
   }

 const editBatch=(batchId)=>{
    axios.get(`http://localhost:4000/batches/${batchId}`)
    .then((res)=> {
          setid (res.data.id)
          setcourse(res.data.course)
          setdate(res.data.date)
          setduration(res.data.duration)
          settimings(res.data.timings)
          settrainer(res.data.trainer)
    })
  }
  const updateBatchInApi=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:4000/batches/"+id,{id,course,date,duration,timings,trainer})
    .then(()=>alert ("Batch Updated Successfully"))
    .catch((err)=>console.log(err))

  }
  return (
    <div className='container p-5'>
         <h1>View Batches</h1>
      <table className='table table-bordered table-hover'>
        <thead  className='table-dark'>
        <tr>
                    <th>Course Name</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                    <th>Timings</th>
                    <th>Trainer</th>
                    <th>Register Demo</th>
                     
                </tr>
        </thead>
        <tbody>
        {batchesData.map((item)=>{
          return (
            <tr>
              <td>{item.course} </td>
              <td>{item.date}</td>
              <td>{item.duration}</td>
              <td>{item.timings}</td>
              <td>{item.trainer}</td>
              <td>
                <button className='btn btn-primary'onClick={()=>editBatch(item.id)} data-bs-target="#updateBatch" data-bs-toggle="modal">Edit</button>
                <button className='btn btn-danger'onClick={()=>deleteBatch(item.id) }>Delete</button>
              </td>
            </tr>
          )

        })}
      </tbody>
        </table>
        <div className='modal fade' id="updateBatch">
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
              <h3 className='modal-title'>
                Update Batch Data
              </h3>
              <button className='btn-close' data-bs-dismiss="modal"></button>
              </div>
              <div className='modal-body'>
              <form onSubmit={updateBatchInApi}>
            <input type='text' name='course' className='form-control mb-3' placeholder='Enter Course Name 'value={course} onChange={(e)=>setcourse(e.target.value)}/>
            <input type='date' name='date' className='form-control mb-3'value={date} onChange={(e)=>setdate(e.target.value)}/>
            <input type='text' name='duration' className='form-control mb-3' placeholder='Course Duration'value={duration} onChange={(e)=>setduration(e.target.value)}/>
            <input type='text' name='timings' className='form-control mb-3' placeholder='Batch Timings'value={timings} onChange={(e)=>settimings(e.target.value)}/>
            <input type='text' name='trainer' className='form-control mb-3' placeholder='Name of the Trainer'value={trainer} onChange={(e)=>settrainer(e.target.value)}/>
            <input type='submit' value="Update Batch" className='btn btn-danger' data-bs-dismiss="modal"/>
            
        </form>
               </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default ViewBatches
