import React, { useEffect, useState } from 'react'
import pic1 from "./assets/pic1.png"
import pic2 from "./assets/pic2.png"
import pic3 from "./assets/pic3.jpg"
import pic4 from "./assets/pic4.png"
import pic5 from "./assets/pic5.jpg"
import pic6 from "./assets/pic6.png"
import { NavLink } from 'react-router-dom'

const Courses = () => {
  const [courseData,setCourseData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/courses")
  .then((res)=>res.json())
  .then((json)=>setCourseData(json))
  })
  return (
    <div className='container p-5 text-center'>
      <h2>Our <span className='text-danger'>Courses</span></h2>
      <div className='row'>
        {courseData.map((course)=>{
          return(
            <div className='col-12 col-md-6 col-lg-4 col-xl-3 mx-auto'>
              <div className='card 'key={course.id}>
                <div className='imgcourse'>
                  <img src={course.courseImg} alt=''className='w-100'/>
                </div>
                <div className='card-body'>
                  <h4>{course.course}</h4>
                </div>
                <NavLink to={`/courseDetails/${course.id}`}><button className='btn btn-danger w-100'>Know More</button></NavLink>

                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Courses