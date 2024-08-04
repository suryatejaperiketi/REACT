import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./Components/Style.css"
import Header from './Components/HIT/Header'
import Slider from './Components/HIT/Slider'
import Footer from './Components/HIT/Footer'
import Routing from './Components/HIT/Routing'
import LifeCycles from './Components/LifeCycles'
import BasicRead from './Components/CRUDclass/BasicRead'
import CustRead from './Components/CRUDclass/CustRead'
import AddBatches from './Components/CRUDclass/AddBatches'
import {StateEx} from './Hooks/StateEx'
import SendEnauiry from './Components/HIT/SendEnquiry'
import SendEnquiry from './Components/HIT/SendEnquiry'
import Contact from './Components/HIT/Contact'
import ViewBatchess from './Components/HIT/ViewBatches'
import ViewBatches from './Components/HIT/ViewBatches'




function App() {
  return (
    <div>
 
 <Header/>
 <Routing/>
 <Footer/>
    </div>
  )
}

export default App
