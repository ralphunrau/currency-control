import '../styles/TransactionDisplay/index.scss';
import SelectCategoryForm from './SelectCategoryForm';
import React, {useState} from 'react';
import ExpenseChart from './ExpenseChart';

function TransactionDisplay(props) {

  const [category, setCategory] = useState('Food');

  return (
    <div className='transaction-display-main'>
      <ExpenseChart />
      {/* <SelectCategoryForm category={category} setCategory={setCategory}/> */}
    </div>
  );
}

export default TransactionDisplay;