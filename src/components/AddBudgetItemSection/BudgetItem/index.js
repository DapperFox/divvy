import React from 'react';
import numeral from 'numeral';
import styled from 'styled-components';
import { themeColors } from '../../App/styles'

numeral.defaultFormat('$0,0.00');
const ListItem = styled.li`
  margin: 10px 0;
`;

export default function BudgetItem ({ name, amount, category }) {
  const CategoryPill = styled.span`
    background-color: ${themeColors.charts[category]};
    font-size: calc(4px + 1vmin);
    color: ${themeColors.tertiary};
    padding: 1px 5px;
    margin: 3px;
    border-radius: 15px;
  `;

  return (
    <ListItem>
      <CategoryPill>{category}</CategoryPill>
      { `${name}: ${numeral(amount).format()}` }
    </ListItem>
  )
};
