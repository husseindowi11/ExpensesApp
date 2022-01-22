import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          filteredYear={filteredYear}
          onFilterChangeHandler={filterChangeHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
