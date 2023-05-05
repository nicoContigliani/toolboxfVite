/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Titles from '../Titles/Titles'

const Headers = (props) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export default Headers
