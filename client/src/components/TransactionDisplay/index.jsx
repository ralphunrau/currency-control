import '../styles/TransactionDisplay/index.scss';
import React, {useState} from 'react';
import ExistingCategoryForm from './ExistingCategoryForm';


function TransactionDisplay(props) {

  return (
    <div className='transaction-display-main'>
      <ExistingCategoryForm />
    </div>
  );
}

export default TransactionDisplay;