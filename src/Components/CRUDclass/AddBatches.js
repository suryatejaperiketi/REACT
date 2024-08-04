import axios from 'axios'
import React, { Component } from 'react'

export default class AddBatches extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       course:"",
       date:"",
       duration:"",
       timing:"",
       trainer:""
    }
  }
  ChangeData=(e)=>{
    this.setState({
      [e.target.name]:e.target.value

    })
    console.log(e.target.value);
  }
  postBatch=(e)=>{
    e.preventDefault()
    
    const{course,date,duration,timings,trainer} =this.state
    axios.post("http://localhost:4000/batches",{course,date,duration,timings,trainer})
    .then(()=>{
      alert("Batch Added Succesfully");
      this.setState({
        course:"",
        date:"",
        duration:"",
        timing:"",
        trainer:""
     

      })
    })

    .catch((err)=>{
      console.log(err);
    })

  }
  render() {
    const{course,date,duration,timings,trainer} =this.state
    return (
      <div className='container p-5'>
        <div className='col-8 col-lg-4 mx-auto'>
        <h1>Add Batches</h1>   
        <form onSubmit={this.postBatch}>
            <input type='text' name='course' className='form-control mb-3' placeholder='Enter Course Name' value={course} onChange={this.ChangeData}/>
            <input type='date' name='date' className='form-control mb-3'value={date} onChange={this.ChangeData}/>
            <input type='text' name='duration' className='form-control mb-3' placeholder='Course Duration'value={duration} onChange={this.ChangeData}/>
            <input type='text' name='timings' className='form-control mb-3' placeholder='Batch Timings'value={timings} onChange={this.ChangeData}/>
            <input type='text' name='trainer' className='form-control mb-3' placeholder='Name of the Trainer'value={trainer} onChange={this.ChangeData}/>
            <input type='submit' value="Add Batch" className='btn btn-danger'/>
            
        </form>
        </div>

      </div>
    )
  }
}
