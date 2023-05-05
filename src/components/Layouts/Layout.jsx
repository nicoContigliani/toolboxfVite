/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Headers from '../headers/Headers'
import Titles from '../Titles/Titles'

const Layout = (props) => {
    return (
        <div>
            <div {...props}>

                <Headers
                    className="thead"
                >
                    <Titles
                        type="h"
                        className="titleHeader"
                        label="React Test App"
                    />
                </Headers>


                {props.children}
            </div>
        </div>
    )
}

export default Layout
