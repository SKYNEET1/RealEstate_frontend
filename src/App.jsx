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



function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='w-full overflow-hidden'>
       <ToastContainer/>
       <Header/>
       <About/>
       <Projects/>
       <Testimonial/>
       <Contactus/>
       <Footer/>
      </div>
     
  )
}

export default App
