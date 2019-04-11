import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import MyButton from '../Button/MyButton'
import Avatar from '../Avatar/Avatar'

const Navbar = (props) => (
  <div className="Navbar">
   <Nav>
     <Nav.Item>
       GitHub Issue Viewer
     </Nav.Item>
     <Nav.Item>
     <Avatar avatar='https://avatars3.githubusercontent.com/u/26478993?s=40&v=4' />
     </Nav.Item>
     <Nav.Item>
     <MyButton children="Logout" variant="primary"/>
     </Nav.Item>
   </Nav>
  </div>
)

export default Navbar