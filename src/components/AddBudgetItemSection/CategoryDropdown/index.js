import React from 'react';
import styled from 'styled-components';
import categories from './categories';

const Select = styled.select`
  font-size: 14px;
  height: 30px;
  box-sizing: border-box;
  -webkit-border-radius: 0px;
`;

export default function CategoryDropdown ({ onChange }) {
  return (
    <Select id='category' onChange={ (event) => onChange(event.target.value) }>
      { categories.map(({ value, text }) => (
        <option key={value} value={value}>{text}</option>
      ))}
    </Select>
  )
}

