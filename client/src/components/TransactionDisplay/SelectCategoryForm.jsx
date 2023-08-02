import '../styles/TransactionDisplay/selectCategoryForm.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function SelectCategoryForm(props) {

  const [userCategories, setUserCategories] = useState([]);
  // const [category, setCategory] = useState('');

  const handleChange = (event) => {
    props.setCategory(event.target.value);
  }

  const loadUserExpenseCategories = (param) => {
    axios.get('/expense/category/user').then((res) => {
      const categories = res.data.map((category, index) => {
        return <MenuItem key={index} value={category.category}>{category.category}</MenuItem>
      })

      setUserCategories(categories);

      if (param) {
        props.setCategory(param);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleNewCategorySubmit = (event) => {
    event.preventDefault();
    axios.post('/expense/category/new', {category: event.target[0].value}).then((res) => {
      loadUserExpenseCategories(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

    event.target.reset();
  }

  console.log(props.userExpenses);
  console.log(props.category);

  const expenseView = props.userExpenses.map((x) => {
    return x.expense_category_id
  })

  useEffect(() => {
    loadUserExpenseCategories();
  }, [])

  return (
    <div>
      <h4>List of categorical expenses</h4>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select a category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.category}
          label="expense-category"
          onChange={handleChange}
        >
          {userCategories}
          <form onSubmit={handleNewCategorySubmit}>
            <TextField placeholder='Add a new category' variant="standard" />
          </form>
        </Select>
      </FormControl>
      <div className='expense-display'>
        {/* {expenseView} */}
      </div>
    </div>
  );
}

export default SelectCategoryForm;