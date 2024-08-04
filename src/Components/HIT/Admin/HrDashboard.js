import React, { useState } from 'react'
import AddBatches from '../../CRUDclass/AddBatches'
import ViewBatches from '../ViewBatches'
import Welcome from './Welcome'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourses'
import LatestNews from './LatestNews'
import ViewEnquires from './ViewEnquires'

const HrDashboard = () => {
  const [view,setView] =useState("")

  const DashboardView =()=>{
    let output = "";
    if(view === ""){
      output = <Welcome/>
    }
    else if (view === "addBatches"){
      output = <AddBatches/>

    }
    else if (view === "viewBatches"){
      output = <ViewBatches/>

    }
    else if (view === "addCourse"){
      output = <AddCourse/>

    }
    else if (view === "viewCourses"){
      
      output = <ViewCourses/>

    }
    else if (view === "latestNews"){
      
      output = <LatestNews/>

    }
    else if (view === "viewEnquires"){
      
      output = <ViewEnquires/>

    }



      return output
  }

 

  return (
    <div className='container-fluid'>
        <div className='row'>
            <aside className='col-12 col-lg-3 text-center py-5 '>
            <h3> HrDashboard</h3>
            <button onClick={()=>setView("addCourse")}>Add Course</button>
            <button onClick={()=>setView("viewCourses")}>View Courses</button>
            <button onClick={()=>setView("addBatches")}>Add Batches</button>
            <button onClick={()=>setView("viewBatches")}>View Batches</button>
            <button onClick={()=>setView("latestNews")}>Latest News</button>
            <button onClick={()=>setView("viewEnquires")}>View Enquires</button>

            </aside>
            <div className='col-12 col-lg-9'>
              {DashboardView()}

              
            
            </div>
            

        </div>
        
    </div>
  )
}

export default HrDashboard