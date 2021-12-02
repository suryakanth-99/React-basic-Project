import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {
  const [title, setTitle]=useState(props.title);
  
  const clickHandler = () => {
    setTitle('updated');

  }
  return (
    
    <Card className="expense-item">
    <ExpenseDate date = {props.date}/>
      {/* <div className=".expense-item__description"> */}
        <h2>{title}</h2>
      {/* </div> */}
      <div className="expense-item__price">${props.amount}</div>
      <button onClick = {clickHandler}>title</button>
    </Card>
  );
}
export default ExpenseItem;
