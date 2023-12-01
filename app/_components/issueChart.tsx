"use client"
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from 'recharts';
import React from 'react';
interface Props {
    open: number;
    inProgress: number;
    closed: number;
  }

  const IssueChart = ({ open, inProgress, closed }: Props) => {
    const data = [
      { label: 'Open', value: open },
      { label: 'In Progress', value: inProgress },
      { label: 'Closed', value: closed },
    ];

    return (
    
        <ResponsiveContainer width="100%"  height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: 'hsl(20.5 90.2% 48.2%)' }}
          />
        </BarChart>
      </ResponsiveContainer>

    )
}
export default IssueChart;