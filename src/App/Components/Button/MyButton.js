import React from 'react'
import { Button } from 'react-bootstrap'

const MyButton = (props) => (
    <Button variant={props.variant} type={props.type} onClick={props.onClick}>
    {props.children}
    </Button>
)

export default MyButton