import React, { useState } from 'react'
import logo from "./../assets/logo.jpg"
import { useNavigate } from 'react-router-dom'

const HrLogin = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const LoginCheck=(e)=>{
        e.preventDefault()
        if(username==="surya" && password ==="123456"){
            navigate("/hrdashboard")
          
        }else{
            alert("Invalid Username or Password")
        }
        
    }
  return (
    <div className='container p-5 text-center'>
        <div className='col-8  col-lg-4 mx-auto'>
       <img src={logo}/>
       <form onSubmit={LoginCheck}>
        <input type='text' name='username' placeholder='Hr User name' className='form-control my-3' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type='text' name='password' placeholder='Hr Password' className='form-control my-3' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input  type='submit'/>
       </form>
        </div>       
        </div>
  )
}

export default HrLogin