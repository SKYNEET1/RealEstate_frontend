import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contactus from './components/Contactus'
import React from 'react';
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login';



function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='w-full overflow-hidden'>

       <Routes>
        <Route path='/' element={<>       
       <ToastContainer/>
       <Header/>
       <About/>
       <Projects/>
       <Testimonial/>
       <Contactus/>
       <Footer/></>}></Route>
        <Route path='/signup' element = {<Signup/>} ></Route>
        <Route path='/login' element = {<Login/>} ></Route>
       </Routes>
      </div>
     
  )
}

export default App
