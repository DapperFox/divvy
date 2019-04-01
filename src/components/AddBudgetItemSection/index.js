import React from 'react';
import styled from 'styled-components';

import BudgetItem from './BudgetItem';
import BudgetInputs from './BudgetInputs';
import { MainSection, PageHeader } from '../App/styles'


const UnorderedList = styled.ul`
  list-style-type: none;
`

export default function AddBugdetItemSection ({ budgetItems, setBudgetItems }) {
  return (
    <MainSection>
      <PageHeader>Budget Items</PageHeader>
      <BudgetInputs
        onClick={ (value) => setBudgetItems([...budgetItems, value]) }
      />
      <UnorderedList>
        { budgetItems.map(({ name, amount, category, id }) => (
          <BudgetItem
            key={id}
            name={name}
            amount={amount}
            category={category}
          />
        ))
        }
      </UnorderedList>
    </MainSection>
  )
}
