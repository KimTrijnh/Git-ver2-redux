import React from 'react'

export const IssueTitle = (props) => (
    <div className="title">
        <h4>#<span>{props.id}</span> {props.title}</h4>
    </div>
)
