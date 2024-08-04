import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './SendEnquiry'

const CourseDetails = () => {
    const {id} = useParams()
    const[course,setCourse]=useState("")
    useEffect(()=>{
        axios.get(`http://localhost:4000/courses/${id}`)
        .then((res)=>setCourse(res.data))
    })
  return (  
    <div className='container p-5'>
        <div className='row'>
            <div className='col-12 col-lg-8 '>
                <h1>{course.course}</h1>
                <p className='text-bg-primary p-2'><strong>Skills : </strong> {course.skills} <strong>Duration : </strong> {course.duration} Days</p>
                <p><strong>Description : </strong> {course.description}</p>
                <img src={course.courseImg} className='w-100  '/>
    
            </div>
            <div className='col-12 col-lg-4 my-5 text-center'>
               
                <SendEnquiry/>
            </div>
        </div>
    </div>
  )
}

export default CourseDetails