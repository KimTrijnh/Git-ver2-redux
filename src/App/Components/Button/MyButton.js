import React from 'react'
import { Button } from 'react-bootstrap'

const MyButton = (props) => (
    <Button variant={props.variant} type={props.type}>
    {props.children}
    </Button>
)

export default MyButton