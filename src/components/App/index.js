import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './styles';
import AddBudgetItemSection from '../AddBudgetItemSection';
import ExpenseChartSection from '../ExpenseChartSection';

export default function App () {
  const [budgetItems, setBudgetItems] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const { data } = await axios('https://api.sheety.co/be70fd19-a058-4eba-a64a-e223b1744be2');
      setBudgetItems(...budgetItems, data)
    }
    fetchData();
  }, [])

  return (
    <Container>
      <AddBudgetItemSection budgetItems={ budgetItems } setBudgetItems={ setBudgetItems } />
      <ExpenseChartSection budgetItems={ budgetItems } />
    </Container>
  );
}
