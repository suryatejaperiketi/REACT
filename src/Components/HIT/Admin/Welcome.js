import React from 'react'
import AdminImg from './../assets/admin.jpg'

const Welcome = () => {
  return (
    <div className='container p-5 text-center'>
        <h1>Welcome to Admin HrDashboard </h1>
        <img className='w-50' src={AdminImg } alt=''/>

    </div>
  )
}

export default Welcome
