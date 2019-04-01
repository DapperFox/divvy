import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { themeColors } from '../../App/styles';

export default function ExpenseRadialChart ({ budgetItems }) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const formattedData = _(budgetItems)
      .groupBy('category')
      .map((budgetItems, key) => ({
        name: key,
        fill: themeColors.charts[key],
        value: _.sumBy(budgetItems, 'amount')
      })
      ).value();
    setData(formattedData)
  }, [budgetItems]);

  return (
    <ResponsiveContainer width={500} height='80%'>
      <RadialBarChart
        width={530}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: '#666', position: 'insideStart' }}
          background clockWise={true}
          dataKey='value'
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout='vertical'
          verticalAlign='top'
          align='left'
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  )
};
