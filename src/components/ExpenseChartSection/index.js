import React, { useState } from 'react';
import ExpenseRadialChart from './ExpenseRadialChart';
import ExpenseLineChart from './ExpenseLineChart';
import { MainSection, PageHeader, StyledButton } from '../App/styles';

const Charts = {
  radial: ExpenseRadialChart,
  line: ExpenseLineChart
};

export default function ExpenseChartSection ({ budgetItems }) {
  const [selectedChartType, setSelectedChartType] = useState('radial');

  function onSetChart (type) {
    setSelectedChartType(type);
  };

  return (
    <MainSection>
      <PageHeader>Budget Chart</PageHeader>
      <ExpenseCharts budgetItems={ budgetItems } type={ selectedChartType } />
      <StyledButton onClick={ onSetChart.bind(this, 'line') }>
        Line Chart
      </StyledButton>
      <StyledButton onClick={ onSetChart.bind(this, 'radial') }>
        Radial Chart
      </StyledButton>
    </MainSection>
  )
};

function ExpenseCharts (props) {
  const SelectedChart = Charts[props.type];
  return <SelectedChart {...props } />
};
