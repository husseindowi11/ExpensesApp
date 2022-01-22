import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [appear, setAppear] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
    setAppear(false)
  }
  const cancelCallback = () => {
    setAppear(false);
  }
  if(appear == false){
    return (
      <div className="new-expense">
        <button onClick={() => setAppear(true) }>Add Expense</button>
      </div>
    )
  }
  return (
    <div className="new-expense">
      
      <ExpenseForm onCancel={cancelCallback} onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense
