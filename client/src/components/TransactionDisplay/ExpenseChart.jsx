import React, {useState, useEffect} from 'react';
import {CChart} from '@coreui/react-chartjs';

function ExpenseChart(props) {

  const calculateChartData = () => {

    let chartData = [];
    let y = 1;
    let categorySum = 0;

    for (let x = 0; x < props.userExpenses.length; x++) {
      if (props.userExpenses[x].expense_category_id === y) {
        categorySum += props.userExpenses[x].amount;
      } else {
        chartData.push(categorySum);
        categorySum = 0;
        categorySum += props.userExpenses[x].amount;
        y++;
      }
    }
    chartData.push(categorySum);
  }

  return (
    <div className='expense-chart-main'>
      <CChart
        type="doughnut"
        data={{
          labels: props.userCategories,
          datasets: [
            {
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
              data: [40, 20, 80, 10],
            },
          ],
        }}
      />
    </div>
  );
}

export default ExpenseChart;