import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'
import { motion } from 'framer-motion';

export default function App() {
  const sidebar_variant = {
    hidden:{
      x:'-10vw',
      opacity:0 
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        delay:0.2,duration:0.7,type:'spring'
      }
    }
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <div className="container app-container">
          <div className="row app-row">
              <div className="col-lg-3">
                <motion.div className="app-sidebar"
                  variants={sidebar_variant}
                  initial='hidden'
                  animate='visible'
                >
                  <Sidebar/>
                </motion.div>
              </div>
              <div className="col-lg-9">
                <div className="app-main-content">
                  <Navbar/>
                  <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route exact path="/resume" element={<Resume/>}/>
                    <Route exact path="/projects" element={<Projects/>}/>
                    <Route path='*' element={<About/>}/>
                    {/* <Navigate to="/"/> */}
                  </Routes>
                </div>
              </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
