import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { themeColors } from '../../App/styles';

export default function ExpenseLineChart ({ budgetItems }) {
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
      <BarChart
        width={530}
        height={250}
        data={data}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' stroke={themeColors.text}/>
        <YAxis  stroke={themeColors.text}/>
        <Tooltip />
        <Bar
          label={{ fill: themeColors.primary }}
          dataKey='value'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
