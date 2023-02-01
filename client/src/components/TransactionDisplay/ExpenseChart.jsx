import React, {useState, useEffect} from 'react';
// import '../styles/TransactionDisplay/expenseInput.scss';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import {CChart} from '@coreui/react-chartjs';
import axios from 'axios';

function ExpenseChart(props) {

  return (
    <div className='expense-chart-main'>
      <CChart
        type="doughnut"
        data={{
          labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
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