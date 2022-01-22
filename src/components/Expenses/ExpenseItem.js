import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.element.date} />
        <div className="expense-item__description">
          <h2>{props.element.title}</h2>
        </div>
        <div className="expense-item__price">${props.element.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
