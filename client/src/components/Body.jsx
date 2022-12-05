import './styles/Body.scss';
import TransactionDisplay from './TransactionDisplay';
import TransactionForm from './TransactionForm';

function Body(props) {
  return (
    <div className='body-main'>
      <h2>Welcome to your savings!</h2>
      {Object.keys(props.user).length === 0
      ? <p>Our goal at Currency Control is to assist you in making the best financial decisions for your future! Input your income and expenses to determine how much time is needed to save up for your next big purchase!</p>
      : <div className='transaction-body-main'><TransactionForm /><TransactionDisplay /></div>
      }
    </div>
  );
}

export default Body;