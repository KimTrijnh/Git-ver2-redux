import React, { Component } from "react";
import MainNavbar from "../Main/MainNavbar";
import IssuseContainer from "../../Containers/IssueContainer";
import LinkTo from "../Link/LinkTo";
import Spinner from '../../Utils/Spinner'
import { getIssue } from "../../Data/request";

class Main extends Component {
  constructor() {
    super();
    this.state = { issues: [], search: "", isLoading: false };
  }

  handleSearch(repo){
    this.setState({isLoading: true}, () => getIssue(repo) )
    
  }

  render() {
    const {issues, search, isLoading} = this.state
    return (
      <div className="Main container">
        <LinkTo href="#" children="# AdeleD/react-paginate" />
        <MainNavbar handleSearch={repo => this.handleSearch(repo)} />
        {issues.length ? 
          <IssuseContainer data={issues} />:
          (isLoading ? <Spinner /> :
          <div>Search 'owner/repo' to get issues</div>)
        }
        
      </div>
    );
  }
}

export default Main;
