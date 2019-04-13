import React, { Component } from 'react'
import Spinner from '../Utils/Spinner';
import {IssueItem} from '../Components/IssueItem/IssueItem'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {issues : state.issues}
}

const connectedIssues = ({issues}) => 
    (<div className="issueContainer">
        {issues.length ? issues.map(issue =>
        <IssueItem issue={issue}/>):
        <Spinner />}
    </div>
    )


const IssueContainer = connect(mapStateToProps)(connectedIssues)
 

// const IssueContainer = (props) => (
//     <div className="issueContainer">
//         { props.data ? 
//         <>
//         {props.data.map(issue =>
//         <IssueItem issue={issue}/>)}
//         </> :
//         <Spinner />}
//     </div>
// )

export default IssueContainer