import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Batches from './Batches'

const SendEnquiry = () => {
  const [name,setName]=useState("")
  const [mobile,setMobile]=useState("")
  const [email,setEmail]=useState("") 
  const [course,setCourse]=useState("")
  const [message,setMessage]=useState("")
   const postEnquiryInApi=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/enquires",{name,mobile,email,course,message})
    .then(()=>{
      alert("Will get back to you soon")
      setName("")
      setMobile("")
      setEmail("")
      setCourse("")
      setMessage("")
    })
    .catch((err)=>console.log(err));
   }
  return (
    <div className='container p-5'>
    <form onSubmit={postEnquiryInApi} >
    <input type='text' name='studentName' placeholder='Enter Name' className='form-control ' value={name} onChange={(e)=>setName(e.target.value)} />
    <p id='status'></p>
    <input type='text'name='mobile' placeholder='Mobile Number' className='form-control' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    <input type='text'name='email' placeholder='Email Id' className='form-control'value={email} onChange={(e)=>setEmail(e.target.value)} />
    <select className='form-select' name='course'value={course} onChange={(e)=>setCourse(e.target.value)}>
      <option value="">Select Any Course</option>
     
      <option value="Ui">UI Development</option>
      <option value="Python">Python </option>
      <option value="Java">Java</option>
      <option value="Cybersecurity">Cybersecurity</option>
      <option value="Mern">MernFullstack</option>
      <option value="uiux">UI UX Designing</option>
     </select>
     <textarea className='form-control' placeholder='Message' name='Message' rows={10}value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
     <input type='submit' placeholder='Enter Name' className='form-control'/>
  </form>
 </div>
  )
}
export default SendEnquiry