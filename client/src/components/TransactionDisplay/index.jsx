import '../styles/TransactionDisplay/index.scss';
import SelectCategoryForm from './SelectCategoryForm';
import React, {useEffect, useState} from 'react';


function TransactionDisplay(props) {

  const [category, setCategory] = useState('Food');

  return (
    <div className='transaction-display-main'>
      <SelectCategoryForm category={category} setCategory={setCategory}/>
      <div>{category}</div>
    </div>
  );
}

export default TransactionDisplay;