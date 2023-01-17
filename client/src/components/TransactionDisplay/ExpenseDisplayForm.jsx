import React, {useState} from 'react';

function ExpenseDisplayForm(props) {

  return (
    <div>
      Input an expense for the category: {props.category}
    </div>
  );
}

export default ExpenseDisplayForm;