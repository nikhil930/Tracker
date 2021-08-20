import "./ExpenseDate.css";
import './ExpenseItem.css'

export const ExpenseDate =(props) => {
    const Day=props.date.toLocaleString('en-US', {day:'2-digit'});
    const Year=props.date.getFullYear();
    const Month=props.date.toLocaleString('en-US' , {month:'long'});
    return (
        <div className="expense-item">
      <div>
      <div className='expense-date__month'>{Month}</div>
      <div className='expense-date__year'>{ Year }</div>
      <div className='expense-date__day'>{ Day }</div>
      </div>
    </div>
    )
}