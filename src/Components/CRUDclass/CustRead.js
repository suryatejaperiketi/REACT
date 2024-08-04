import axios from 'axios'
import React, { Component } from 'react'

export default class CustRead extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:"",
        course:"",
        date:"",
        duration:"",
        timings:"",
        trainer:"",
       batches:[]
        
      }
    }
    componentDidMount(){
        axios.get("http://localhost:4000/batches")
        .then((res)=>{
            //console.log(res.data);

            this.setState({
                batches:res.data
               })
    
      
        })
        .catch((err)=>{
            console.log(err);

        })

    }
    deleteBatch=(batchId)=>{
        axios.delete("http://localhost:4000/batches/"+batchId)
        .then(()=>alert("Batch Deleted"))
        .catch((err)=> console.log(err))
        
        

    }
    editBatch=(batchId)=>{
        axios.get("http://localhost:4000/batches/"+batchId)
        .then((res)=> {   
        this.setState({
            id: res.data.id,
            course: res.data.course,
            date:res.data.date,
            duration:res.data.duration,
            timings:res.data.timings,
            trainer:res.data.trainer,
           
        }) 
       
          
        }) 
        .catch((err)=>{console.log(err)})

    }
    changeData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    putBatch=(e)=>{
        e.preventDefault();
        const {id,course,date,duration,timings,trainer}=this.state;
        axios.put("http://localhost:4000/batches/"+id,{id,course,date,duration,timings,trainer})
        .then(()=>{
            alert("Batch Updated")
        })
        .catch((err)=>console.log(err))


    }
    

  render() {
    return (
      <div className='container p-5'>
        <h1 className='text-center'>Upcoming Batches</h1>
        <table className='table table-bordered table-hover'>
            <thead className='table-dark'>
                <tr>
                    <th>Course Name</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                    <th>Timings</th>
                    <th>Trainer</th>
                    <th>Action</th>
                     
                </tr>
            </thead>
            <tbody>
                {this.state.batches.map((bat)=>{
                    return(
                        <tr key={bat.id}>
                            <td>{bat.course}</td>
                            <td>{bat.date}</td>
                            <td>{bat.duration}Days</td>
                            <td>{bat.timings}</td>
                            <td>Mr {bat.trainer}</td>
                            <td>
                                <button className='btn btn-outline-primary me-3' data-bs-target="#update"  data-bs-toggle="modal" onClick={()=>{this.editBatch(bat.id)}}><i className="bi bi-pencil"></i></button>
                                <button className='btn btn-outline-danger' onClick={()=>{this.deleteBatch(bat.id)}}><i className="bi bi-trash-fill"></i></button>
                            </td>
                            
                        </tr>
                    )

                }

                )}

            </tbody>
        </table>
        {/*Modal for Update Data*/}
        <div className='modal fade' id='update'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                         <h4 className='modal-title'>Update Batch Data</h4>
                         <button className='btn-close' data-bs-dismiss="modal"></button>   
                         </div>
                    <div className='modal-body'>
                    <form onSubmit={this.putBatch} >
            <input type='text' name='course' className='form-control mb-3' placeholder='Enter Course Name'value={this.state.course} onChange={this.changeData} />
            <input type='date' name='date' className='form-control mb-3'value={this.state.date} onChange={this.changeData}/>
            <input type='text' name='duration' className='form-control mb-3' placeholder='Course Duration'value={this.state.duration} onChange={this.changeData}/>
            <input type='text' name='timings' className='form-control mb-3' placeholder='Batch Timings'value={this.state.timings} onChange={this.changeData}/>
            <input type='text' name='trainer' className='form-control mb-3' placeholder='Name of the Trainer'value={this.state.trainer} onChange={this.changeData}/>
            <input type='submit' value="Update Batch"z className='btn btn-danger'/>
            
        </form>
                    </div>

                </div>
            </div>

        </div>

      </div>
    )
  }
}
