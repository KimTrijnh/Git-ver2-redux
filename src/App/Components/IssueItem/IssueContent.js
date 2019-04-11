import React from 'react'
import ReactMarkdown from 'react-markdown'


export const IssueContent = (props) => (
    <div className="issueContent">
    <ReactMarkdown 
        source={`${props.body.substring(0,200)}...`}
    />
    <a href="#" target="_blank">Readmore</a>
    </div>
)