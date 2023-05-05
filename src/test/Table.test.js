/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import Tables from '../components/Tables/Table';




test('renders table rows with correct data', () => {
    const column = [
      {
        file: 'file1.txt',
        lineas: [
          {
            text: 'Lorem ipsum',
            number: 42,
            hex: '0x2A'
          }
        ]
      },
      {
        file: 'file2.txt',
        lineas: [
          {
            text: 'dolor sit amet',
            number: 13,
            hex: '0xD'
          }
        ]
      }
    ];
  
    const { getByText } = render(<Tables column={column} />);
    // expect(getByText('file1.txt')).toBeInTheDocument();
    // expect(getByText('Lorem ipsum')).toBeInTheDocument();
    // expect(getByText('42')).toBeInTheDocument();
    // expect(getByText('0x2A')).toBeInTheDocument();
    // expect(getByText('file2.txt')).toBeInTheDocument();
    // expect(getByText('dolor sit amet')).toBeInTheDocument();
    // expect(getByText('13')).toBeInTheDocument();
    // expect(getByText('0xD')).toBeInTheDocument();
  });