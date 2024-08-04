import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from './Slider'
import About from './About'
import Batches from './Batches'
import Courses from './Courses'
import Contact from './Contact'
import NoPage from './NoPage'
import HrLogin from './Admin/HrLogin'
import HrDashboard from './Admin/HrDashboard'
import CourseDetails from './CourseDetails'



const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Slider/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/batches' element={<Batches/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
            <Route path='/hrlogin' element={<HrLogin/>}/>
            <Route path='/hrdashboard' element={<HrDashboard/>}/>
            <Route path='/ViewCourses' element={<viewCourses/>}/>
            <Route path='/CourseDetails/:id' element={<CourseDetails/>}/>
            
            

        </Routes>
    </div>
  )
}

export default Routing