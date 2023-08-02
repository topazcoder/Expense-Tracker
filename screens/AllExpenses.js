import { useContext } from "react";
import ExpensesOutput from "../components/expenses/ExpenseOutput"
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses(){

    const { expenses } = useContext(ExpensesContext);

    return(
        <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} />
    );
};