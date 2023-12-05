import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap'

import routes from 'routes.js'

function Header(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [color, setColor] = useState('transparent')
  const sidebarToggle = useRef()
  const location = useLocation()

  const toggle = () => {
    if (isOpen) {
      setColor('transparent')
    } else {
      setColor('dark')
    }
    setIsOpen(!isOpen)
  }

  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen)
  }

  const getBrand = () => {
    let brandName
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name
      }
      return null
    })
    return brandName
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
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className='navbar-toggler-bar navbar-kebab' />
          <span className='navbar-toggler-bar navbar-kebab' />
          <span className='navbar-toggler-bar navbar-kebab' />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav navbar>
            <NavItem>
              <Link to='https://www.creative-tim.com/product/paper-dashboard-react' className='nav-link btn-magnify'>
                Ссылка на шаблон
              </Link>
            </NavItem>
            <NavItem>
              <Link to='#pablo' className='nav-link btn-magnify'>
                <i className='nc-icon nc-layout-11' />
                <p>
                  <span className='d-lg-none d-md-block'>Stats</span>
                </p>
              </Link>
            </NavItem>
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle caret nav>
                <i className='nc-icon nc-bell-55' />
                <p>
                  <span className='d-lg-none d-md-block'>Some Actions</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag='a'>Action</DropdownItem>
                <DropdownItem tag='a'>Another Action</DropdownItem>
                <DropdownItem tag='a'>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <Link to='#pablo' className='nav-link btn-rotate'>
                <i className='nc-icon nc-settings-gear-65' />
                <p>
                  <span className='d-lg-none d-md-block'>Account</span>
                </p>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header