/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Tables = (props) => {
    const { column } = props

    const [data, setData] = useState([])

    useEffect(() => {

        const dataReturn = []

        const dataFormaterForTable = () => {
            for (let index = 0; index < column.length; index++) {
                const element = column[index];

                let {
                    file,
                    lineas
                } = column[index]


                const datas = lineas.map(elements => {
                    const newObject = { file, ...elements }
                    return newObject;
                });
                dataReturn.push(datas)
            }

        }
        dataFormaterForTable()
        setData(dataReturn.flat())


    }, [column])


    return (
        <div {...props}>
            <Table responsive="sm" className='table-hover table-striped ' >
                <thead>
                    <tr>

                        <th>File</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hexadecimal</th>

                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((item, index) => (

                            <tr key={index}>

                                <td>{item.file}</td>
                                <td>{item.text}</td>
                                <td>{item.number}</td>
                                <td>{item.hex}</td>

                            </tr>


                        ))
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default Tables
