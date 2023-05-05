/* eslint-disable no-unused-vars */
import React from 'react'
import { Audio, RotatingLines } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className='container'>
        

            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />


        </div>
    )
}

export default Spinner
