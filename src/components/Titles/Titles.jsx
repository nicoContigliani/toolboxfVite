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
