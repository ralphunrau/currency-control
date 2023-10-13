import React, {useState, useEffect} from 'react';
import '../styles/TransactionDisplay/categoricalExpenseDisplay.scss';

function CategoricalExpenseDisplay(props) {
  
  const [userCategoricalExpenses, setUserCategoricalExpenses] = useState([]);
  
  const loadCategoricalExpenses = () => {

    // Retrieves current category expenses in a list
    const categoricalExpenses = props.userExpenses.filter((obj) => obj.expense_category_name === props.category).map((elem) => {
      return elem.name + ', $' + elem.amount
    });

    setUserCategoricalExpenses(categoricalExpenses)
  }

  useEffect(() => {
    loadCategoricalExpenses()
  }, [props.category])

  return (
    <div className='expense-display'>
      {userCategoricalExpenses.map((expense, index) => (
        <ul key={index}>{expense}</ul>
      ))}
    </div>
  );
}

export default CategoricalExpenseDisplay;