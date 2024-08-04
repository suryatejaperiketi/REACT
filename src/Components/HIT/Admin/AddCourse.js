

import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const AddCourse = () => {
  const [course,setcourse] = useState("")
  const [courseImg,setcourseImg] = useState("")
  const [skills,setskills] = useState("")
  const [description,setdescription] = useState("")
  const [duration,setduration] = useState("")
  const postCourse = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/courses" ,{course,courseImg,skills,description,duration})
    .then(()=>toast("Course added"))
    .catch((err)=>{
      toast("Error Dude")
      console.log(err)
    })

  }
  
  return (
  <div className='container p-5'>
    <ToastContainer/>
    <div className='col-8 col-lg-6 mx-auto'>
    <h1>AddCourse</h1>
      <form onSubmit={postCourse}>
        <input type='text' name='course' placeholder='Course Name' className='form-control my-3' value={course} onChange={(e)=>setcourse(e.target.value)}/>
        <input type='text' name='courseImg' placeholder='Course Img Ref' className='form-control my-3' value={courseImg} onChange={(e)=>setcourseImg(e.target.value)}/>
        <input type='text' name='skills' placeholder='Skills' className='form-control my-3' value={skills} onChange={(e)=>setskills(e.target.value)}/>
        <input type='text' name='description' placeholder='Course Description' className='form-control my-3' value={description} onChange={(e)=>setdescription(e.target.value)}/>
        <input type='text' name='duration' placeholder='Course Duration' className='form-control my-3' value={duration} onChange={(e)=>setduration(e.target.value)}/>
        <input type='submit' />
        
      </form>

    </div>


  </div>
  )
}

export default AddCourse