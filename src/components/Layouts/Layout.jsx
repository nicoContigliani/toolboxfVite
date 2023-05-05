/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Headers from '../headers/Headers'
import Inputs from '../input/Inputs'
import Titles from '../Titles/Titles'

import { useSelector, useDispatch } from 'react-redux';
import { fileFilterAsync } from '../../Redux/Stores/features/folder/fileSlice';


const Layout = (props) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({ url: 'http:///localhost:3001/files/data', body: null, params: null, method: 'get', Token: 'aSuperSecretKey' })

    const onAction = async () => {
         dispatch(fileFilterAsync(data))     
    }

    return (
        <div  >
            <div {...props}>

                <Headers
                    className="thead"
                >
                    <Titles
                        type="h"
                        className="titleHeader"
                        label="React Test App"
                    /> 
                    <Inputs
                        autocomplete="off"
                        data={data}
                        setData={setData}
                        placeholder="test*.csv"
                        name="params"
                        className="input"
                        type="text"
                        minlength="1"
                        required
                        onClick={() => onAction()}
                    /> 



                </Headers>


                {props.children}-
            </div>
        </div>
    )
}

export default Layout
