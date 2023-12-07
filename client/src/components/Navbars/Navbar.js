import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap'

import routes from 'routes.js'

function Header() {
  const [isOpen] = useState(false)
  const [color] = useState('transparent')
  const sidebarToggle = useRef()
  const location = useLocation()

  const getBrand = () => {
    let brandName
    routes.map((prop) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name
      }
      return null
    })
    return brandName
  }

  const openSidebar = () => {
    document.documentElement.classList.toggle('nav-open')
    sidebarToggle.current.classList.toggle('toggled')
  }

  useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open')
      sidebarToggle.current.classList.toggle('toggled')
    }
  }, [location])

  return (
    <Navbar
      color={
        location.pathname.indexOf('full-screen-maps') !== -1 ? 'dark' : color
      }
      expand='lg'
      className={
        location.pathname.indexOf('full-screen-maps') !== -1
          ? 'navbar-absolute fixed-top'
          : 'navbar-absolute fixed-top ' +
            (color === 'transparent' ? 'navbar-transparent ' : '')
      }
    >
      <Container fluid>
        <div className='navbar-wrapper'>
          <div className='navbar-toggle'>
            <button
              type='button'
              ref={sidebarToggle}
              className='navbar-toggler'
              onClick={() => openSidebar()}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <NavbarBrand href='/'>{getBrand()}</NavbarBrand>
        </div>
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav navbar>
            <NavItem>
              <Link to='https://www.creative-tim.com/product/paper-dashboard-react' className='nav-link btn-magnify' style={{ marginTop: '2%' }}>
                Ссылка на шаблон <strong>creative tim</strong>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
