import React from 'react'
import { Nav } from 'react-bootstrap'
import MyButton from '../Button/MyButton';
import Search from './Search'


// import React, { Component } from 'react'

// export default class MainNavbar extends Component {
//   render() {
//     return (
//         <div className="MainNavbar">
//         <Nav >
//         <Nav.Item>
//          <Search children="Search" handleSubmit={(search) => this.props.handleSearch(search)} />
//         </Nav.Item>
//         <Nav.Item>
//             <MyButton children={`Total: ${this.props.totalItems}`}  />
            
//         </Nav.Item>
//         <Nav.Item>
//             <MyButton children="New Issue" variant="primary" />
//         </Nav.Item>
//         </Nav>
//         </div>
//     )
//   }
// }


const MainNavbar = (props) => (
    <div className="MainNavbar">
    <Nav >
    <Nav.Item>
     <Search children="Search" handleSubmit={(search) => props.handleSearch(search)} />
    </Nav.Item>
    <Nav.Item>
        <MyButton children={`Total: ${props.totalItems}`}  />
    </Nav.Item>
    <Nav.Item>
        <MyButton children="New Issue" variant="primary" />
    </Nav.Item>
    </Nav>
    </div>
)

export default MainNavbar