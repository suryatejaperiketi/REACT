import axios from 'axios'
import React, { Component } from 'react'

export default class BasicRead extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[]
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.log("success");
      
      this.setState({
        users:res.data

      })
    })

    .catch((err)=>{
      console.log("Failure");
      console.log(err);
     
    })
    
  }
 
  render() {
    return (
      <div className='container p-5'>
        <h1>Read Data From</h1>
        <table className='table table-bordered table-hover'>
          <thead className='table-dark' >
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>

          </thead>
          <tbody>
            {this.state.users.map((users)=>{
              return<tr>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                
                <td>{users.website}</td>
                
                
                
                
              </tr>

            })}

          </tbody>

        </table>
      </div>
    )
  }
}
