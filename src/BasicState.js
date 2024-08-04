import React, { Component } from "react";

 export default class BasicState extends Component{
    constructor(props){
        super(props)
        
        this.state={
            count:0
        }
    }
    IncreaseCounter=()=>{
       this.setState({
        count:this.state.count +1

       })
        
       }
       DecreaseCounter=()=>{
        this.setState({
            count:this.state.count -1
        })
       }
  render(){
    return(
        <div>
            <h1> Counter:{this.state.count}</h1>
            <button onClick={this.IncreaseCounter}>add</button>
            <button onClick={this.DecreaseCounter}>sub</button>


        </div>
    )
    
  }  
}