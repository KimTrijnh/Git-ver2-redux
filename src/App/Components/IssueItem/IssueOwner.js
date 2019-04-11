import React from 'react'

const styleImg={
    width: '64px'
}

export const IssueOwner = (props) => (
    <div className="issueOwner">
        <img src={props.avatar_url} alt={props.login} style={styleImg}/>
        <span>@{props.login}</span>
    </div>
)