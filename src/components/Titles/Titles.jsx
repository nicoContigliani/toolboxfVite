/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Titles = (props) => {
    return (
        <div {...props}>

            {
                props.type === "h" ? <h4>
                    {props.label}
                </h4> :
                    <span>
                        props.label
                    </span>

            }
        </div>
    )
}

export default Titles
