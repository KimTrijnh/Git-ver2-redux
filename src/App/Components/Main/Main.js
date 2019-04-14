import React, { Component } from "react";
import MainNavbar from "../Main/MainNavbar";
import IssuseContainer from "../../Containers/IssueContainer";
import LinkTo from "../Link/LinkTo";
import Spinner from "../../Utils/Spinner";


class Main extends Component {
  constructor() {
    super();
    const existingState = JSON.parse(sessionStorage.getItem('state'))
    if(existingState){
      this.state = existingState
    }
    if(!existingState){
      this.state = { issues: [], search: "", isLoading: false }; 
    }
  }

  async handleSearch(search) {
    let url = `https://api.github.com/repos/${search}/issues?state=all`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      this.setState({ issues: data, search: `#${search}`, isLoading: false },
      () => {sessionStorage.setItem('state', JSON.stringify(this.state));
    console.log(JSON.parse(sessionStorage.getItem('state')))});
    } catch (error) {
      console.log(error);
    }
  }
  

  render() {
    const { issues, search, isLoading } = this.state;
    return (
      <div className="Main container">
        <MainNavbar handleSearch={search => this.handleSearch(search)} />
        <LinkTo href="#" children={search} />
        {issues.length ? (
          <IssuseContainer data={issues} />
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div>Search 'owner/repo' to get issues</div>
        )}
      </div>
    );
  }
}

export default Main;
