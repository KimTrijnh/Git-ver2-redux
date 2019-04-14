
import React, { Component } from 'react'
import PaginationComponent from 'react-reactstrap-pagination'

export default class Pagination extends Component {
  constructor(props){
      super(props)
      this.state = { selectedPage: 1}
      this.handleSelected = this.handleSelected.bind(this)
  }  

  handleSelected(selectedPage) {
    console.log("selected", selectedPage);
    this.setState({ selectedPage: selectedPage },() => this.props.handleSelected(selectedPage));
  }

  render() {
    return (
      <PaginationComponent
          totalItems={50}
          pageSize={3}
          onSelect={this.handleSelected}
          maxPaginationNumbers={5}
        //   activePage={2}
        />
    )
  }
}
