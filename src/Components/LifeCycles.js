import React, { Component } from 'react'

export default class LifeCycles extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Elearn"
      }
      console.log("constructor");
    }
     static getDerivedStateFromProps(){ 
      console.log("getDerivedStateFromProps");
      return null
    }
    componentDidMount(){
      console.log("componentDidMount");
    }
    StateChange=()=>{
      this.setState({
        name:"React is awesome"

      })
      console.log("Updated Life Cycles");
    }
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate");
      return true
    }


  render() {
    console.log("render");
    return (
      <div className='container p-5'>
        <h1>LifeCycles - {this.state.name}</h1>
        <button onClick={this.StateChange}>Update</button>
      </div>
    )
  }
}
