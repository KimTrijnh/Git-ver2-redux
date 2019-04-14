import React, {Component} from 'react'
import { Nav } from 'react-bootstrap'
import MyButton from '../Button/MyButton';
import Search from './Search'
import AddIssueModal from '../Modal'


export default class MainNavbar extends Component {
  constructor() {
      super()
      this.state = {show: false}
  }

  handleShow(){
    this.setState({show: true})
    console.log('show')
  }

  handleHide(){
      this.setState({show: false})
  }

  render() {
    return (
        <div className="MainNavbar">
        <Nav >
        <Nav.Item>
         <Search children="Search" handleSubmit={(search) =>this.props.handleSearch(search)} />
        </Nav.Item>
        <Nav.Item>
            <MyButton children={`Total: ${this.props.totalItems}`}  />
        </Nav.Item>
        <Nav.Item>
            <MyButton children="New Issue" variant="primary" onClick={() => this.handleShow()} />
            <AddIssueModal handleHide={() => this.handleHide()} show={this.state.show}/>
        </Nav.Item>
        </Nav>
        </div>
    )
  }
}


