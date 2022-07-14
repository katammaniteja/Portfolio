import React from 'react'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className='app'>
      <div className="container">
        <div className="row">
            <div className="col-lg-3">
              <div className="app-sidebar">
                <Sidebar/>
              </div>
              
            </div>
            <div className="col-lg-9 app-main-content">
              main
            </div>
        </div>
      </div>
    </div>
  )
}
