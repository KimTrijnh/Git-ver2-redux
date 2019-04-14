import React, { Component } from "react";
import MainNavbar from "../Main/MainNavbar";
import IssuseContainer from "../../Containers/IssueContainer";
import LinkTo from "../Link/LinkTo";
import Spinner from "../../Utils/Spinner";
import PaginationComponent from 'react-reactstrap-pagination'

class Main extends Component {
  constructor() {
    super();
    const existingState = JSON.parse(sessionStorage.getItem("state"));
    if (existingState) {
      this.state = existingState;
      console.log(this.state.search)
    }
    if (!existingState) {
      this.state = {
        issues: [],
        search: "",
        isLoading: false,
        selectedPage: 1,
        totalItems: 0
      };
    }
  }

  async getIssues(search, selectedPage) {
    let token = sessionStorage.getItem('token')
    let url = `https://api.github.com/repos/${search}/issues?state=all&page=${selectedPage}&per_page=10&access_token=${token}`;
    console.log(url)
    try {
      let response = await fetch(url);
      let data = await response.json();

      this.setState(
        { issues: data, search: search, isLoading: false, selectedPage: selectedPage},
        () => {
          sessionStorage.setItem("state", JSON.stringify(this.state));
          console.log(JSON.parse(sessionStorage.getItem("state")));
        }
      );
    } catch (error) {
      console.log(error);
    }
  }


  handleSelected(selectedPage) {
    this.setState({selectedPage : selectedPage})
  }

 async handleSearch(search) {
   let selectedPageTo1 = await this.handleSelected(1)
   let updateIssues = await this.getIssues(search, 1)
   let updateTotalItems = await this.setState({totalItems : this.state.issues[0].number})
  }

  async handleChangePage(selectedPage) {
    const {search} = this.state
    let selectPage = await this.handleSelected(selectedPage)
    let updateIssues = await this.getIssues(search, selectedPage)
  }
  
  render() {
    const { issues, search, selectedPage, isLoading, totalItems } = this.state;
    return (
      <div className="Main container">
        <MainNavbar handleSearch={search => this.handleSearch(search)} />
        <LinkTo href="#" children={search} />

        <PaginationComponent
          totalItems={totalItems}
          pageSize={10}
          onSelect={(selectedPage) => this.handleChangePage(selectedPage)}
          maxPaginationNumbers={5}
        />
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
