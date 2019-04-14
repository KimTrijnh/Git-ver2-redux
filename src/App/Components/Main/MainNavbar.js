import React from 'react'
import { Nav } from 'react-bootstrap'
import MyButton from '../Button/MyButton';
import Search from './Search'


const MainNavbar = (props) => (
    <div className="MainNavbar">
    <Nav >
    <Nav.Item>
     <Search children="Search" handleSubmit={(search) => props.handleSearch(search)} />
    </Nav.Item>
    <Nav.Item>
        <MyButton children="Total"/ >
        <MyButton children="Open"/ >
        <MyButton children="Closed"/ >
    </Nav.Item>
    <Nav.Item>
        <MyButton children="New Issue" variant="primary" />
    </Nav.Item>
    </Nav>
    </div>
)

export default MainNavbar