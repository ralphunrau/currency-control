import '../styles/TransactionDisplay/existingCategoryForm.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';


function ExistingCategoryForm(props) {

  const [category, setCategory] = useState('Food');

  const handleChange = (event) => {
    // event.preventDefault();

    setCategory(event.target.value);
  }

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
          <TextField placeholder='Add a new category' variant="standard" />
        </Select>
      </FormControl>
    </div>
  );
}

export default ExistingCategoryForm