import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expese-date__month">{month}</div>
      <div className="expese-date__day">{day}</div>
      <div className="expese-date__year"></div>
      {year}
    </div>
  );
};

export default ExpenseDate;
