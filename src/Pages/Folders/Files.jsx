/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Headers from '../../components/headers/Headers'
import Tables from '../../components/Tables/Table'
import Titles from '../../components/Titles/Titles'

import { fileAsync, selectFile } from '../../Redux/Stores/features/folder/fileSlice'
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner'


const Files = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        onAction()
        
    }, [])
    
    
    const onAction = async () => {
        dispatch(fileAsync(data))
    }
    const { file } = useSelector(selectFile);
    const data = { url: 'http://localhost:3001/files/data', body: null, params: null, method: 'get', Token: 'aSuperSecretKey' }



    return (
        <>
            {
                (file.length == 0) ? <Spinner /> :
                    <Tables
                        className="tables"
                        column={file}
                    />

            }
        </>
    )
}

export default Files
