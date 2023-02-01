import '../styles/TransactionDisplay/index.scss';
import SelectCategoryForm from './SelectCategoryForm';
import ExpenseInput from './ExpenseInput';
import React, {useState} from 'react';


function TransactionDisplay(props) {

  const [category, setCategory] = useState('Food');

  return (
    <div className='transaction-display-main'>
      <SelectCategoryForm category={category} setCategory={setCategory}/>
      <ExpenseInput category={category}/>
    </div>
  );
}

export default TransactionDisplay;