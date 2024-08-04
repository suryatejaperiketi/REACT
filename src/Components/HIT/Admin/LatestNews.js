import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddLatestNews from './AddLatestNews'

const LatestNews = () => {
  const [news, setNews] = useState([])
  const [id, setId] = useState("")
  const [date, setDate] = useState("")
  const [occation, setOccation] = useState("")
  useEffect(() => {
    axios.get("http://localhost:4000/news")
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err))
  })

  const postNewsInApi = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/news", { date, occation })
      .then(() => {
        alert("will get back to you soon")
        setDate("")
        setOccation("")

      })
      .catch((err) => console.log(err))
  }
  const deleteNews = (batchId) => {
    axios.delete(`http://localhost:4000/news/${batchId}`)
      .then(() => alert("deletted Succecfully"))
      .catch((err) => console.log(err))
  }
  const editNews = (newsId) => {
    axios.get(`http://localhost:4000/news/${newsId}`)
      .then((res) => {
        setDate(res.data.date)
        setId(res.data.id)
        setOccation(res.data.occation)


      })
  }


  const updateNews = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/news/${id}`, { id, date, occation })
    .then(()=>{
      alert("Updated Successfully")
    })
    .catch((err)=>{
      console.log(err);
    })
  }



  return (
    <div>

      <h1>ViewNews</h1>
      <button className='btn btn-danger m-2' data-bs-target="#addnews" data-bs-toggle="modal">Add News</button>
      <table className='table table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>date</th>
            <th>occation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {news.map((news) => {
            return (
              <tr>
                <td>{news.date}</td>
                <td>{news.occation}</td>
                <td><button className='btn btn-primary m-2' onClick={() => editNews(news.id)} data-bs-target="#news" data-bs-toggle="modal" >Edit</button>
                  <button className='btn btn-danger' onClick={() => deleteNews(news.id)} >delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      

      <div className='modal fade' id='addnews'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              
              <button className='btn-close' data-bs-dismiss="modal"></button>
            
                  
                  <div className='modal-body'>
                <AddLatestNews/>

              </div>

            </div>

          </div>

        </div>
      </div>
      
     



      <div className='modal fade' id='news'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Add News</h4>
              <button className='btn-close' data-bs-dismiss="modal"></button>
            </div>
            <div className='modal-body'>

              <form onSubmit={updateNews}>
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <input type='text' name='occation' placeholder='occation' className='form-control' value={occation} onChange={(e) => setOccation(e.target.value)} />
                <input type='submit' data-bs-dismiss="modal" />

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default LatestNews