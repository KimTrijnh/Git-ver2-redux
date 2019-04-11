import React, { Component } from 'react'
import MainNavbar from '../Main/MainNavbar'
import IssuseContainer from '../../Containers/IssueContainer'
import LinkTo from '../Link/LinkTo';
import {ISSUES_DATA} from '../../../Data/MockData'


const Main = (props) => (
  <div className="Main container">
    <LinkTo href="#" children="# AdeleD/react-paginate"/>
    <MainNavbar />
    <IssuseContainer data={ISSUES_DATA.issues}/>
  </div>
)

export default Main
