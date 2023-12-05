import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Nav } from 'reactstrap'

function Sidebar(props) {
  const location = useLocation()
  const sidebar = useRef()
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? 'active' : ''
  }

  return (
    <div
      className='sidebar'
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className='logo'>
        <a className='simple-text logo-mini' href='https://github.com/artem-kuznecov?tab=repositories'>
          <div className='logo-img'>
            <img src='https://avatars.githubusercontent.com/u/95186298?v=4' alt='artem-kuznecov' />
          </div>
        </a>
        <span className='simple-text logo-normal'>Тестовое</span>
      </div>
      <div className='sidebar-wrapper' ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? ' active-pro' : '')
                }
                key={key}
              >
                <NavLink to={prop.layout + prop.path} className='nav-NavLink'>
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar
