import React, { Component } from "react";
import MyButton from "../Button/MyButton";


class Search extends Component {
  constructor() {
    super();
    this.state = { search: '' };

  }

  handleChange(e){
     this.setState({search: e.target.value}, () => console.log(this.state.search))
  }


  handleSubmit(e, search) {
      e.preventDefault()
      this.props.handleSubmit(search)
  }

  render() {
    const {search} = this.state
    return (
      <div className="search">
        <form onSubmit={(e) => this.handleSubmit(e,search)}>
          <input
            className="form-control"
            id="search"
            value={search}
            onChange={e => this.handleChange(e)}
            placeholder={this.props.children}
          />
          <MyButton type="submit" children="Search" variant="warning" />
        </form>
      </div>
    )
  }
}

export default Search