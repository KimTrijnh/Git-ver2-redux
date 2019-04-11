import React from 'react'
import {IssueTitle} from './IssueTitle'
import {IssueContent} from './IssueContent'
import { IssueOwner } from './IssueOwner';


export const IssueItem = (props) => (
<div className="issueItem">
<IssueOwner avatar_url={props.issue.user.avatar_url} login={props.issue.user.login}/>
<IssueTitle id={props.issue.id} title={props.issue.title}/>
<IssueContent body={props.issue.body} />
</div>
)