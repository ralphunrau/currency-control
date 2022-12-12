import '../styles/TransactionDisplay/index.scss';
import React, {useState} from 'react';
import ExistingCategoryForm from './ExistingCategoryForm';
import NewCategoryForm from './NewCategoryForm';


function TransactionDisplay(props) {

  const [category, setCategory] = useState('Food');

  return (
    <div className='transaction-display-main'>
      {category === 'Add new category' ?
      <NewCategoryForm /> :
      <ExistingCategoryForm setCategory={setCategory} category={category}/>
      }
    </div>
  );
}

export default TransactionDisplay;