
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourses = () => {
  const [coursesData,setCourseData]=useState([])
  const[id,setid]=useState("")
  const[course,setCourse]=useState("")
  const[courseImg,setcourseImg]=useState("")
  const[skills,setskills]=useState("")
  const[description,setdescription]=useState("")
  const[duration,setduration]=useState("")

 
  useEffect(()=>{
    fetch("http://localhost:4000/courses")
  .then((res)=>res.json())
  .then((json)=>setCourseData(json))
  })
   const deleteCourse=(batchid)=>{
    axios.delete(`http://localhost:4000/courses/${batchid}`)
    .then(()=>alert("Batch Deleted"))
    .catch((err)=> console.log(err))
    
   }


  const editCourse =(batchid)=>{
    axios.get(`http://localhost:4000/courses/${batchid}`)
    .then((res)=>{
      setid(res.data.id)
      setCourse(res.data.course)
      setcourseImg(res.data.courseImg)
      setskills(res.data.skills)
      setdescription(res.data.description)
      setduration(res.data.duration)
    })
  }
 const updatecourseApi=(e)=>{
  e.preventDefault()
  axios.put("http://localhost:4000/courses/"+id,{course,courseImg,skills,description,duration})
  .then(()=>alert("Batch Updated"))
  .catch((err)=>console.log(err));
  

 }

  return (
    <div className='container p-5 text-center'>
    
    <h2>Our <span className='text-danger'>Courses Data</span></h2>
    <table className='table table-bordered table-hover'>
        <thead  className='table-dark'>
        <tr>
                    <th>Course </th>
                    <th>courseImg</th>
                    <th>Skills</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th> 
                      Actions 

                    </th>
                  
                     
                </tr>
        </thead>
     
      <tbody>
        {coursesData.map((item)=>{
          return(
            <tr>
              <td>{item.course}</td>
               <td>
                <img  className='w-100'src={item.courseImg}/>
                </td>
              <td>{item.skills}</td>
              <td>{item.description}</td>
              <td>{item.duration}</td>
              <td>
                <button className='btn btn-primary'onClick={()=>editCourse(item.id)} data-bs-target="#updateCourse" data-bs-toggle="modal">Edit</button>
                <button className='btn btn-danger'onClick={()=>deleteCourse(item.id) }>Delete</button>
              </td>
              
            </tr>
          )
        })}
        

      </tbody>  
      </table>
      <div className='modal fade' id='updateCourse'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
              <h3 className='modal-title'>
                Update Batch Data
              </h3>
              <button className='btn-close' data-bs-dismiss="modal"></button>
              </div>
              <div className='modal-body'>
              <form onSubmit={updatecourseApi} >
            <input type='text' name='course' className='form-control mb-3' placeholder='Enter Course Name ' value={course} onChange={(e)=>setCourse(e.target.value)}/>
            <input type='text' name='courseImg' className='form-control mb-3'placeholder='Enter courseImg' value={courseImg} onChange={(e)=>setcourseImg(e.target.value)}/>
            <input type='text' name='skills' className='form-control mb-3' placeholder='Enter skills ' value={skills} onChange={(e)=>setskills(e.target.value)}/>
            <input type='text' name='description' className='form-control mb-3' placeholder='Batch description' value={description} onChange={(e)=>setdescription(e.target.value)}/>
            <input type='text' name='duration' className='form-control mb-3' placeholder='Duration' value={duration}onChange={(e)=>setduration(e.target.value)} />
            <input type='submit' value="Update Batch" className='btn btn-danger' data-bs-dismiss="modal"/>
            
        </form>
             
                
                

              </div>
            </div>
          </div>

        </div>

    </div>
)
}

export default ViewCourses