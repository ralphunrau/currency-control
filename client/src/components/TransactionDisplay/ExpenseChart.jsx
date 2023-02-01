import React, {useState, useEffect} from 'react';
import {CChart} from '@coreui/react-chartjs';

function ExpenseChart(props) {

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