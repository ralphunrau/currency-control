import '../styles/TransactionDisplay/index.scss';
import SelectCategoryForm from './SelectCategoryForm';
import React, {useState, useEffect} from 'react';
import ExpenseChart from './ExpenseChart';
import axios from 'axios';

function TransactionDisplay(props) {

  const [userCategories, setUserCategories] = useState([]);
  const [userExpenses, setUserExpenses] = useState([]);

  const loadExpenseCategories = () => {
    axios.get('/expense/category/user').then((res) => {
      const categories = res.data.map((elem) => elem.category)
      setUserCategories(categories)
    }).catch((err) => {
      console.log(err)
    })
  }

  const loadUserExpenses = () => {
    axios.get('/expense/user').then((res) => {
      const expenses = res.data.map((elem) => {
        return {expense_category_id: elem.expense_category_id, amount: elem.amount, name: elem.name}
      })
      setUserExpenses(expenses)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    loadExpenseCategories();
    loadUserExpenses();
  }, [])

  return (
    <div className='transaction-display-main'>
      <ExpenseChart userCategories={userCategories} userExpenses={userExpenses}/>
      {/* <SelectCategoryForm category={category} setCategory={setCategory}/> */}
    </div>
  );
}

export default TransactionDisplay;