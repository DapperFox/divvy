import React, { useRef, useState } from 'react';
import CategoryDropdown from '../CategoryDropdown'
import { StyledButton } from '../../App/styles';
import { Wrapper, Input } from './styles';
import categories from '../CategoryDropdown/categories'

export default function BudgetInput ({ onClick }) {
  const budgetAmount = useRef(undefined);
  const budgetName = useRef(undefined);
  const [budgetCategory, setBudgetCategory] = useState(categories[0].value)

  function setItemsOnClick () {
    onClick({
      name: budgetName.current.value,
      amount: parseInt(budgetAmount.current.value),
      category: budgetCategory
    })
  }

  function handleClick () {
    setItemsOnClick();
  }

  function handleKeyUp (event) {
    if (event.key === 'Enter') {
      setItemsOnClick();
    }
  }

  function onCategoryChange (category) {
    setBudgetCategory(category);
  }

  return (
    <Wrapper>
      <CategoryDropdown onChange={ onCategoryChange } />
      <Input
        id='name'
        type='text'
        placeholder='Name'
        ref={ budgetName }
        onKeyUp={ handleKeyUp }
        required
      />
      <Input
        id='amount'
        type='number'
        placeholder='Amount'
        ref={ budgetAmount }
        onKeyUp={ handleKeyUp }
        min="0.01"
        step="0.01"
        required
      />
      <StyledButton onClick={ handleClick }>
        Add
      </StyledButton>
    </Wrapper>
  )
}
