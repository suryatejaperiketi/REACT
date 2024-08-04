import React from 'react'

import SendEnquiry from './SendEnquiry'

const Contact = () => {
  return (
    
    <div className='container-fluid p-0'>
    <div className='container p-5'>
    <div className='row '>
    
      <div className='col-12 col-lg-6 '>
        <h2>Reach Us</h2>
        <SendEnquiry/>
     
      </div>
       <div className='col-12 col-lg-6 p-5'>
        <p>Adress</p>
        <p> <span><i class="bi bi-house"></i></span>House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana- 081</p>
        <p><strong>+91 81439 56849</strong></p>

        </div>

    </div>  
    </div>


  </div>
  )
}

export default Contact