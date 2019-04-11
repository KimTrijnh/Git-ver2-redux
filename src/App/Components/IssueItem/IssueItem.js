import React from 'react'
import {IssueTitle} from './IssueTitle'
import {IssueContent} from './IssueContent'


export const IssueItem = (props) => (
<div className="issueItem">
<IssueTitle id={props.issue.id} title={props.issue.title}/>
<IssueContent body={props.issue.body} />
</div>
)