import './styles/TransactionDisplay.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function TransactionDisplay(props) {
  return (
    <div className='transaction-display-main'>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select a category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="expense-category"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Food</MenuItem>
          <MenuItem value={20}>Clothing</MenuItem>
          <MenuItem value={30}>Transportation</MenuItem>
          <MenuItem value={40}>Housing</MenuItem>
          <MenuItem value={50}>Utilities</MenuItem>
          <MenuItem value={60}>Medical</MenuItem>
          <MenuItem value={70}>Debt Payments</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default TransactionDisplay;