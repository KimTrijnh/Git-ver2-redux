import React, { Component } from 'react'

const LinkTo = (props) => (
    <div className="Link">
        <a href={props.href}>
            {props.children}
        </a>
    </div>
)


export default LinkTo