import React from 'react'
import MyButton from '../Button/MyButton'

export const Search = (props) => (
    <div className="search">
    <form onSubmit={props.handleSubmit}>
    <input className="form-control" value={props.value} onChange={props.handleChange} placeholder={props.children}/>
    <MyButton type="submit" children="Search" variant="warning"/>
    </form>
    </div>
)

