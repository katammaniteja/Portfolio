import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className="container app-container">
          <div className="row app-row">
              <div className="col-lg-3">
                <div className="app-sidebar">
                  <Sidebar/>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="app-main-content">
                  <Navbar/>
                  <Routes>
                    <Route exact path="/" element={<About/>}/>
                    <Route exact path="/resume" element={<Resume/>}/>
                    <Route exact path="/projects" element={<Projects/>}/>
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
