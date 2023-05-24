import React, {useState, useEffect} from 'react';
import {CChart} from '@coreui/react-chartjs';

function ExpenseChart(props) {

  const [chartData, setChartData] = useState([]);

  const calculateChartData = (input) => {

    let data = [];
    let y = 1;
    let categorySum = 0;

    for (let x = 0; x < props.userExpenses.length; x++) {
      if (props.userExpenses[x].expense_category_id === y) {
        categorySum += props.userExpenses[x].amount;
      } else {
        data.push(categorySum);
        categorySum = 0;
        categorySum += props.userExpenses[x].amount;
        y++;
      }
    }
    data.push(categorySum);

    // Compares fetched chart data with 
    if (JSON.stringify(data) !== JSON.stringify(input)) {
      setChartData(data);
    }
  }

  useEffect(() => {
    calculateChartData(chartData);
  })
  
  return (
    <div className='expense-chart-main'>
      <CChart
        type="doughnut"
        data={{
          labels: props.userCategories,
          datasets: [
            {
              backgroundColor: ['#FF2D00', '#FFC300', '#FCFF00', '#7DFF00', '#00FFBA', '#007AFF', '#9300FF', '#FF00EF'],
              data: chartData,
            },
          ],
        }}
      />
    </div>
  );
}

export default ExpenseChart;