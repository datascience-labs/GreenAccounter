import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const CircleChart = ({ data }) => {
  const colors = ['#00FF00', '#FFFF00', '#FFA500', '#FF0000', '#00FFFF'];

  return (
    <div className="top-chart">
      <div className="top-text">
        {data.map((entry, index) => (
          <div className="circular-progress" key={index}>
            <PieChart width={200} height={200}>
              <Pie
                data={[
                  { name: entry.name, value: entry.value },
                  { name: 'Empty', value: 1 - entry.value }
                ]}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius="40%"
                outerRadius="60%"
                fill={[colors[index], '#eee']}
                dataKey="value"
                labelLine={false}
              >
                <Cell key={`cell-${index}`} />
                <Cell key={`cell-${index + 1}`} fill="#eee" />
              </Pie>
              <Tooltip formatter={(value) => `${(value * 100).toFixed(2)}%`} />
            </PieChart>
            <div className="inner">
              <span
                className="resource-name"
                style={{ marginLeft: index === 0 ? '34px' : index === 1 ? '35px' : '23px' }}
              >
                {entry.name}
              </span>
              <br />
              <span
                className="resource-value"
                style={{ marginLeft: index === 0 ? '34px' : index === 1 ? '35px' : '23px' }}
              >
                {(entry.value * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleChart;
