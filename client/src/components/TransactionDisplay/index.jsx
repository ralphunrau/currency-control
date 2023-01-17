import '../styles/TransactionDisplay/index.scss';
import ExistingCategoryForm from './ExistingCategoryForm';
import React, {useEffect, useState} from 'react';


function TransactionDisplay(props) {

  const [category, setCategory] = useState('Food');

  return (
    <div className='transaction-display-main'>
      <ExistingCategoryForm category={category} setCategory={setCategory}/>
      <div>{category}</div>
    </div>
  );
}

export default TransactionDisplay;