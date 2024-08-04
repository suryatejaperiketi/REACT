import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SendEnquiry from '../SendEnquiry'


const ViewEnquiries = () => {
  const[enquiries, setEnquiries]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/enquires")
    .then((res)=>setEnquiries(res.data))
    .catch((err)=>console.log(err))
  })
  const deleteBatch=(batchId)=>{
    axios.delete(`http://localhost:4000/enquires/${batchId}`)
    .then(()=>alert("delete successfully"))
    .catch((err)=>console.log(err))
  
  }
  return (
    <div>
      <h1>ViewEnquiries</h1>
      <table className='table table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq)=>{
            return(
              <tr>
                <td>{enq.name}</td>
                <td>{enq.mobile}</td>
                <td>{enq.email}</td>
                <td>{enq.course}</td>
                <td>{enq.message}</td>
                <td><button className='btn btn-danger' onClick={()=>deleteBatch(enq.id)} >Delete</button></td>
                  
                
              </tr>
            )
          })}
        </tbody>
      </table>

      <button className='btn btn-danger' data-bs-target="#enquiry" data-bs-toggle="modal">Add</button>
      


    <div className='modal fade' id='enquiry'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Add Enquiry</h4>
            <button className='btn-close' data-bs-dismiss="modal"></button>
          </div>
          <div className='modal-body'>
            <SendEnquiry/>
            </div> 
            </div>
            </div>
            </div>
             </div>
  )
}


export default ViewEnquiries