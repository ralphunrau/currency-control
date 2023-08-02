import '../styles/TransactionDisplay/index.scss';
import SelectCategoryForm from './SelectCategoryForm';
import ExpenseChart from './ExpenseChart';
import CategoricalExpenseDisplay from './CategoricalExpenseDisplay';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function TransactionDisplay(props) {

  const [userCategories, setUserCategories] = useState([]);
  const [userExpenses, setUserExpenses] = useState([]);
  const [category, setCategory] = useState('');

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
        return {expense_category_id: elem.expense_category_id, expense_category_name: elem.expense_category_name, amount: elem.amount, name: elem.name}
      })
      setUserExpenses(expenses);
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
      <SelectCategoryForm category={category} setCategory={setCategory} userExpenses={userExpenses}/>
      <CategoricalExpenseDisplay category={category} userCategories={userCategories} userExpenses={userExpenses}/>
    </div>
  );
}

export default TransactionDisplay;