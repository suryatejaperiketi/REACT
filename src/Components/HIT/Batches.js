import axios, { Axios } from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import SendEnquiry from './SendEnquiry'

const Batches = () => {
  const [batchesData,setBatchesData] = useState([])
  useEffect(()=>{
   axios.get("http://localhost:4000/batches")
        .then((res)=> setBatchesData(res.data))
        .catch((err)=> console.log(err))
  })
  return (
    < div className='container my-3'>
      <h1>Upcoming Batches</h1>
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
                <button className='btn btn-danger data-bs ' data-bs-target="#enroll" data-bs-toggle= "modal">Enroll for Demo</button>
              </td>
            </tr>
          )

        })}
        
      </tbody>
      </table>
        <div className='modal fade' id="enroll">
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
              <h3 className='modal-title'>
                Register for Demo
              </h3>
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

export default Batches