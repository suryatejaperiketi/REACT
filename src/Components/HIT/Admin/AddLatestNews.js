import axios from 'axios'
import React, { useEffect, useState } from 'react'


const AddLatestNews = () => {
    const[date,setDate]=useState("")
    const[occation,setOccation]=useState("")
    const[news,setNews]=useState("")
    useEffect(() => {
      axios.get("http://localhost:4000/news ")
        .then((res) => setNews(res.data))
        .catch((err) => console.log(err))
    })
  
   
 
    const postLatestNewsInApi=(e)=>{
        e.preventDefault()
        axios.post(" http://localhost:4000/news",{date,occation})
        .then(()=>{
            alert("succesfully added")
            setDate("")
            setOccation("")
            
        })
        .catch((err)=>console.log(err))
    }

    
  return (
    <div className='container-fluid'>
      <h2>AddLatestNews</h2>
        
        <form onSubmit={postLatestNewsInApi}>
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <input type='text' name='occation' placeholder='occation' className='form-control' value={occation} onChange={(e) => setOccation(e.target.value)} />
                <input type='submit'data-bs-dismiss="modal" />

              </form>

    </div>
  )
}

export default AddLatestNews