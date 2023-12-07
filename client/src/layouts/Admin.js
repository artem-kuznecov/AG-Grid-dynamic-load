import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from 'components/Navbars/Navbar.js'
import Footer from 'components/Footer/Footer.js'
import Sidebar from 'components/Sidebar/Sidebar.js'

import routes from 'routes.js'

function Dashboard(props) {
  const backgroundColor = 'black'
  const activeColor = 'info'
  const mainPanel = useRef()
  const location = useLocation()

  useEffect(() => {
    mainPanel.current.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [location])

  return (
    <div className='wrapper'>
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className='main-panel' ref={mainPanel}>
        <Navbar {...props} />
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            )
          })}
        </Routes>
        <Footer fluid />
      </div>
    </div>
  )
}

export default Dashboard
