import React from 'react'
import Spinner from '../Utils/Spinner';
import {IssueItem} from '../Components/IssueItem/IssueItem'


const IssueContainer = (props) => (
    <div className="issueContainer">
        { props.data ? 
        <>
        {props.data.map(issue =>
        <IssueItem issue={issue}/>)}
        </> :
        <Spinner />}
    </div>
)

export default IssueContainer