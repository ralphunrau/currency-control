import '../styles/TransactionDisplay/index.scss';
import SelectCategoryForm from './SelectCategoryForm';
import React, {useState, useEffect} from 'react';
import ExpenseChart from './ExpenseChart';
import axios from 'axios';

function TransactionDisplay(props) {

  const [userCategories, setUserCategories] = useState([]);

  const loadExpenseCategories = () => {
    axios.get('/expense/category/user').then((res) => {
      const categories = res.data.map((elem) => elem.category)
      setUserCategories(categories)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    loadExpenseCategories();
  }, [])

  return (
    <div className='transaction-display-main'>
      <ExpenseChart userCategories={userCategories}/>
      {/* <SelectCategoryForm category={category} setCategory={setCategory}/> */}
    </div>
  );
}

export default TransactionDisplay;