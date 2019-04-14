import React from 'react'
import {IssueItem} from '../Components/IssueItem/IssueItem'


const IssueContainer = (props) => (
    <div className="issueContainer">
        {props.data.map(issue =>
        <IssueItem issue={issue}/>)}
    </div>
)

export default IssueContainer