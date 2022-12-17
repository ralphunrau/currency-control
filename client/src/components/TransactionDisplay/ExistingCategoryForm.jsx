import '../styles/TransactionDisplay/existingCategoryForm.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function ExistingCategoryForm(props) {

  const [userCategories, setUserCategories] = useState([]);
  const [category, setCategory] = useState('Food');

  const handleChange = (event) => {
    setCategory(event.target.value);
  }

  const loadCreatedExpenseCategories = (param) => {
    axios.get('/expense/category/user').then((res) => {
      const categories = res.data.map((category, index) => {
        return <MenuItem key={index} value={category.category}>{category.category}</MenuItem>
      })

      setUserCategories(categories)

      if (param) {
        setCategory(param);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleNewCategorySubmit = (event) => {
    event.preventDefault();
    axios.post('/expense/category/new', {category: event.target[0].value}).then((res) => {
      loadCreatedExpenseCategories(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

    event.target.reset();
  }

  useEffect(() => {
    loadCreatedExpenseCategories();
  }, [])

  return (
    <div>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select a category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="expense-category"
          onChange={handleChange}
        >
          <MenuItem value={'Food'}>Food</MenuItem>
          <MenuItem value={'Clothing'}>Clothing</MenuItem>
          <MenuItem value={'Transportation'}>Transportation</MenuItem>
          <MenuItem value={'Housing'}>Housing</MenuItem>
          <MenuItem value={'Utilities'}>Utilities</MenuItem>
          <MenuItem value={'Medical'}>Medical</MenuItem>
          <MenuItem value={'Debt Payments'}>Debt Payments</MenuItem>
          {userCategories}
          <form onSubmit={handleNewCategorySubmit}>
            <TextField placeholder='Add a new category' variant="standard" />
          </form>
        </Select>
      </FormControl>
    </div>
  );
}

export default ExistingCategoryForm