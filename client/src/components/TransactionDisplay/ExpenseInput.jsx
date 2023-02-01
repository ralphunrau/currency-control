import React, {useState} from 'react';
import '../styles/TransactionDisplay/expenseInput.scss';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function ExpenseInput(props) {

  const handleSubmit = () => {

  }

  return (
    <div className='expense-input-main'>
      <text>Input a {props.category} expense</text>
      <Box component="form" onSubmit={handleSubmit} >
        <TextField placeholder='Expense' variant="standard" />
      </Box>
    </div>
  );
}

export default ExpenseInput;